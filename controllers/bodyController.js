//Рулим кузовами

const { Body } = require('../models/models');
const ApiError = require('../error/ApiError');


class BodyController {
    //Кузов добавляем
    async create(req, res) {
        const { name } = req.body;
        const body = await Body.create({ name }); //Название
        return res.json(body);
    }

    //Все кузова получаем
    async getAll(req, res) {
        const bodies = await Body.findAll();
        return res.json(bodies);
    }


    //Один кузов получаем
    async getOne(req, res) {
        const { id } = req.params;
        let body = await Body.findOne({ where: { id } });
        return res.json(body);
    }

    //Кузов обновляем
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const body = await Body.update({ name }, { where: { id } });
        return res.json(body);
    }

    //Кузов удаляем
    async delete(req, res) {
        const { id } = req.params;
        let body = await Body.destroy({ where: { id } });
        return res.json(body);
    }
}
module.exports = new BodyController();
