const router = require('express').Router();
const {User} = require ('../models');

router.get('/', async (req, res) => {
  const userData = await User.findAll();
  const users = userData.map(user => user.get());
  res.render('index', { users });
});
module.exports = router;
