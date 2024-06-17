//Куда ходить за кузовами

const Router = require('express');
const router = new Router();
const bodyController = require('../controllers/bodyController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), bodyController.create);//Добавляем кузов
router.get('/', bodyController.getAll);//Получаем все кузова
router.get('/:id', bodyController.getOne);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), bodyController.update);
router.delete('/:id', checkRole('ADMIN'), bodyController.delete);

//Тоже надо добавить методы для обновления и удаления

module.exports = router;