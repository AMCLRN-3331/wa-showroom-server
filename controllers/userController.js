//Рулим юзерами

const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
}

class UserController {
  //Регистрируем юзера
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('non email or password'));
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('user is ready'));
    }

    const hashPasswoord = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPasswoord, role });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }


  //Логиним юзера
  async login(req, res, next) {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if(!user){
      return next(ApiError.internal('No user'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if(!comparePassword){
      return next(ApiError.internal('wrong password'));
    }

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({token});
  }

  //Проверяем юзера (фейсконтроль)
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    if(token == null) token='null';
    return res.json({token});
  }
}
module.exports = new UserController();
