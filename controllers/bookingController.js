//Рулим машинами

const {Booking, AutoBooking} = require('../models/models');
const ApiError = require('../error/ApiError');

//Машину добавляем
class BookingController {
  async create(req, res) {
    const { name, number } = req.body;
    const booking = await Booking.create({ name, number }); //Название
    return res.json(booking);
  }

  async orderCreate(req, res) {
    const {name, email, date, time, autoId, colorId} = req.body;
    const order = await AutoBooking.create({name, email, date, time, autoId, colorId});
    return res.json(order);
  }

  async getAllOrders(req, res) {
    const orders = await AutoBooking.findAll();
    return res.json(orders);
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
