//Куда ходить за марками

const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), brandController.create);//Добавляем марку
router.get('/', brandController.getAll);//Получаем все марки
router.get('/:id', brandController.getOne);//Получаем одну машину
router.put('/:id', checkRole('ADMIN'), brandController.update);
router.delete('/:id', checkRole('ADMIN'), brandController.delete);
//Тоже самое

module.exports = router;