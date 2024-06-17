//Куда ходить за информацией для авто

const Router = require('express');
const router = new Router();
const modelController = require('../controllers/modelController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), modelController.create);//Добавляем машину
router.get('/', modelController.getAll);//Получаем все машины
router.get('/:id', modelController.getOne);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), modelController.update);
router.delete('/:id', checkRole('ADMIN'), modelController.delete);


//Надо добавить методы для обновления и удаления

module.exports = router;