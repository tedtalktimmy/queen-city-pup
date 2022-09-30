const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dogRoutes = require('./dogRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
