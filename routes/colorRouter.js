//Куда ходить за информацией для авто

const Router = require('express');
const router = new Router();
const colorController = require('../controllers/colorController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), colorController.create);//Добавляем машину
router.get('/', colorController.getAll);//Получаем все машины
router.get('/:id', colorController.getAllForAuto);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), colorController.update);
router.delete('/:id', checkRole('ADMIN'), colorController.delete);


//Надо добавить методы для обновления и удаления

module.exports = router;