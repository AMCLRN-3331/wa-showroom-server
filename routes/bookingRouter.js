//Куда ходить за информацией для авто

const Router = require('express');
const router = new Router();
const bookingController = require('../controllers/bookingController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', bookingController.create);//Добавляем машину
router.post('/order', bookingController.orderCreate);
router.get('/order', bookingController.getAllOrders);
router.get('/', checkRole(['SPEC','ADMIN']), bookingController.getAll);//Получаем все машины
router.get('/:id', checkRole(['SPEC','ADMIN']), bookingController.getOne);//Получаем одну машину
router.put('/:id', checkRole(['ADMIN']), bookingController.update);
router.delete('/:id', checkRole(['ADMIN']), bookingController.delete);


//Надо добавить методы для обновления и удаления

module.exports = router;