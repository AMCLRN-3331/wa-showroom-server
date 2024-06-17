//Рулим марками
const uuid = require('uuid');
const path = require('path');
const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    //Марку добавляем
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const { image } = req.files;
            let fileName = uuid.v4() + ".png";
            image.mv(path.resolve(__dirname, '..', 'static', fileName));
            const brand = await Brand.create({ name, image: fileName });
            return res.json(brand);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    //Все марки получаем
    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    //Одну машину получаем
    async getOne(req, res) {
        const { brandId } = req.query;
        let brand = await Brand.findOne({ where: { brandId } });
        return res.json(brand);
    }

    //Марку обновляем
    async update(req, res) {
        try {
            const { name } = req.body;
            const { image } = req.files;
            let fileName = uuid.v4() + ".png";
            image.mv(path.resolve(__dirname, '..', 'static', fileName));
            const brand = await Brand.update({ name, image: fileName });
            return res.json(brand);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    //Марку удаляем
    async delete(req, res) {
        const { brandId } = req.query;
        let brand = await Brand.destroy({ where: { brandId } });
        return res.json(brand);
    }
}
module.exports = new BrandController();