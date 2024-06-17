//Куда ходить за юзерами

const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);//Регистрируем юзера
router.post('/login', userController.login);//Логиним юзера
router.get('/auth', authMiddleware, userController.check);//Фейсконтроль

//Чего-то не хватает

module.exports = router;