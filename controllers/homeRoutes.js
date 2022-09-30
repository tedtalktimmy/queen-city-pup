const router = require('express').Router();
const { User, Dog, Location } = require('../models');

router.get('/', async (req, res) => {
  const userData = await User.findAll();
  const users = userData.map((user) => user.get());
  res.render('index', { users });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/stores', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('stores');
});
router.get('/dogs', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Dog.findAll().then((dogs) => {
    const dogData = dogs.map((dog) =>
      dog.get({
        plain: true,
      })
    );
    console.log(dogData);
    res.render('allDogs', dogData);
  });
});
router.get('/location', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('location');
});


module.exports = router;
