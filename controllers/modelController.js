//Рулим моделями

const {Model} = require('../models/models');
const ApiError = require('../error/ApiError');

//Модель добавляем
class ModelController {
  async create(req, res) {
    const { name } = req.body;
    const model = await Model.create({ name });
    return res.json(model);
  }

  //Все модели получаем
  async getAll(req, res) {
    const models = await Model.findAll();
    return res.json(models);
  }

  //Одну модель получаем
  async getOne(req, res) {
    const { id } = req.params;
    let model = await Model.findOne({ where: { id } });
    return res.json(model);
  }
  
  //Модель обнавляем
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const model = await Model.update({ name }, {where: {id}});
    return res.json(model);
  }

 //Модель удаляем
  async delete(req, res) {
    const { id } = req.params;
    let model = await Model.destroy({ where: { id } });
    return res.json(model);
  }
}
module.exports = new ModelController();