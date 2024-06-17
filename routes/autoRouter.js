//Куда ходить за информацией для авто

const Router = require('express');
const router = new Router();
const autoController = require('../controllers/autoController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), autoController.create);//Добавляем машину
router.get('/', autoController.getAll);//Получаем все машины
router.get('/:id', autoController.getOne);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), autoController.update);
router.delete('/:id', checkRole('ADMIN'), autoController.delete);


//Надо добавить методы для обновления и удаления

module.exports = router;