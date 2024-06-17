//Куда ходить за информацией для авто

const Router = require('express');
const router = new Router();
const imageController = require('../controllers/imageController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), imageController.create);//Добавляем машину
router.get('/', imageController.getAll);//Получаем все машины
router.get('/:id', imageController.getOne);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), imageController.update);
router.delete('/:id', checkRole('ADMIN'), imageController.delete);


//Надо добавить методы для обновления и удаления

module.exports = router;