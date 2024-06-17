//Рулим машинами
const uuid = require('uuid');
const path = require('path');
const { Auto, Image, Brand, Color, AutoColor } = require('../models/models');
const ApiError = require('../error/ApiError');


class AutoController {
  //Машину добавляем
  async create(req, res, next) {
    try {
      let { name, description, price, year, count, country, power, volume, speed, weight, consumption, modelId, brandId, bodyId, gearboxId } = req.body;
      let { image } = req.files;
      const auto = await Auto.create({ name, description, price, year, count, country, power, volume, speed, weight, consumption, modelId, brandId, bodyId, gearboxId });

      //Картинки добавляем
      if (image) {
        console.log(image);
        image.forEach(i => {
          let fileName = uuid.v4() + ".jpg";
          i.mv(path.resolve(__dirname, '..', 'static', fileName));
          Image.create({
            name: fileName,
            autoId: auto.id
          });
        });
      }

      return res.json(auto)
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  //Все машины получаем (с фильтрацией)
  async getAll(req, res) {
    let { brandId, modelId, limit, page } = req.query;
    page = page || 1; //страницы
    limit = limit || 3; //количество
    let offset = page * limit - limit; //отсечка
    console.log(offset)
    let autos;
    if (!brandId && !modelId) {
      autos = await Auto.findAndCountAll({ include: [{ model: Image, as: 'images' }, { model: Color, as: 'colors' }], limit, offset });
    }
    if (brandId && !modelId) {
      autos = await Auto.findAndCountAll({ where: { brandId }, limit, offset, include: [{ model: Image, as: 'images' }, { model: Color, as: 'colors' }] });
    }
    if (!brandId && modelId) {
      autos = await Auto.findAndCountAll({ where: { modelId }, limit, offset, include: [{ model: Image, as: 'images' }, { model: Color, as: 'colors' }] });
    }
    if (brandId && modelId) {
      autos = await Auto.findAndCountAll({ where: { brandId, modelId }, limit, offset, include: [{ model: Image, as: 'images' }, { model: Color, as: 'colors' }] });
    }

    return res.json(autos);

  }

  //Одну машину получаем
  async getOne(req, res) {
    const { id } = req.params;
    const auto = await Auto.findOne({
      where: { id },
      include: [{ model: Image, as: 'images' }, { model: Color, as: 'colors' }]
    });
    return res.json(auto);
  }

  //Машину обновляем
  async update(req, res) {
    try {
      const { id } = req.params;
      let { name, description, price, year, count, country, power, volume, speed, weight, consumption, modelId, brandId } = req.body;
      let { image } = req.files;


      const auto = await Auto.update({ name, description, price, year, count, country, power, volume, speed, weight, consumption, modelId, brandId }, { where: { id } });

      if (image) {
        image.forEach(i => {
          let newFileName = uuid.v4() + ".jpg";
          i.mv(path.resolve(__dirname, '..', 'static', newFileName));
          Image.update({
            name: newFileName,
            autoId: auto.id,
          }, {
            where: {
              autoId: id
            }
          });
        });
      }

      return res.json(auto)
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  //Машину удаляем
  async delete(req, res) {
    const { id } = req.params;
    const auto = await Auto.destroy({
      where: { id },
      include: [{ model: Image, as: 'images' }]
    });
    return res.json(auto);
  }
}
module.exports = new AutoController();
