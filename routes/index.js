const Router = require('express');
const router = new Router();

const autoRouter = require('./autoRouter');
const bodyRouter = require('./bodyRouter');
const bookingRouter = require('./bookingRouter');
const brandRouter = require('./brandRouter');
const colorRouter = require('./colorRouter');
const gearboxRouter = require('./gearboxRouter');
const imageRouter = require('./imageRouter');
const modelRouter = require('./modelRouter');
const userRouter = require('./userRouter');


router.use('/auto', autoRouter);
router.use('/body', bodyRouter);
router.use('/booking', bookingRouter);
router.use('/brand', brandRouter);
router.use('/color', colorRouter);
router.use('/gearbox', gearboxRouter);
router.use('/image', imageRouter);
router.use('/model', modelRouter);
router.use('/user', userRouter);

module.exports = router;