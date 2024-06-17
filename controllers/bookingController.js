//Рулим машинами

const {Booking} = require('../models/models');
const ApiError = require('../error/ApiError');

//Машину добавляем
class BookingController {
  async create(req, res) {
    const { name, number } = req.body;
    const booking = await Booking.create({ name, number }); //Название
    return res.json(booking);
  }

  //Все машины получаем
  async getAll(req, res) {
    const bookings = await Booking.findAll();
        return res.json(bookings);
  }

  //Одну машину получаем
  async getOne(req, res) {
    
  }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}
module.exports = new BookingController();
