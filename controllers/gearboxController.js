//Рулим коробкой

const {Gearbox} = require('../models/models');
const ApiError = require('../error/ApiError');

//Коробку добавляем
class GearboxController {
  async create(req, res) {
    const { name } = req.body;
    const gearbox = await Gearbox.create({ name });
    return res.json(gearbox);
  }

  //Все коробки получаем
  async getAll(req, res) {
    const gearboxes = await Gearbox.findAll();
    return res.json(gearboxes);
  }

  //Одну коробку получаем
  async getOne(req, res) {
    const { id } = req.params;
    let gearbox = await Gearbox.findOne({ where: { id } });
    return res.json(gearbox);
  }

  //Коробку обновляем
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const gearbox = await Gearbox.update({ name }, {where: {id}});
    return res.json(gearbox);
  }

  //Коробку удаляем
  async delete(req, res) {
    const { id } = req.params;
    let gearbox = await Gearbox.destroy({ where: { id } });
    return res.json(gearbox);
  }
}
module.exports = new GearboxController();