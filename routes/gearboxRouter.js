//Куда ходить за информацией для авто

const Router = require('express');
const router = new Router();
const gearboxController = require('../controllers/gearboxController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), gearboxController.create);//Добавляем машину
router.get('/', gearboxController.getAll);//Получаем все машины
router.get('/:id', gearboxController.getOne);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), gearboxController.update);
router.delete('/:id', checkRole('ADMIN'), gearboxController.delete);


//Надо добавить методы для обновления и удаления

module.exports = router;