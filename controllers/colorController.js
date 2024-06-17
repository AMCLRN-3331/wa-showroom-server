//Рулим цветами

//Довести до ума
const { Color } = require('../models/models');
const ApiError = require('../error/ApiError');

//Цвет добавляем
class ColorController {
  async create(req, res) {
    const { name, autoId } = req.body;
    const color = await Color.create({ name, autoId });
    return res.json(color);
  }

  //Все цвета получаем
  async getAll(req, res) {
    const colors = await Color.findAll();
    return res.json(colors);
  }

  async getAllForAuto(req, res) {
    const {id} = req.params;
    const colors = await Color.findAll({ where:  {autoId: id} });
    return res.json(colors);
  }

  //Один цвет получаем
  async getOne(req, res) {
    const { id } = req.params;
    let color = await Color.findOne({ where: { id } });
    return res.json(color);
  }

  //Цвет обновляем
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const color = await Color.update({ name }, {where: {id}});
    return res.json(color);
  }

  //Цвет удаляем
  async delete(req, res) {
    const { id } = req.params;
    let color = await Color.destroy({ where: { id } });
    return res.json(color);
  }
}
module.exports = new ColorController();