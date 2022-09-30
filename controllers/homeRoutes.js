const router = require('express').Router();
const {User} = require ('../models');

router.get('/', async (req, res) => {
  const userData = await User.findAll();
  const users = userData.map(user => user.get());
  res.render('index', { users });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/stores', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('stores');
});

module.exports = router;
