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
router.get('/dates', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Dog.findAll().then((dogData) => {
    const dogs = dogData.map((dog) =>
      dog.get({
        plain: true,
      })
    );
    console.log(dogs);
    res.render('allDogs', { dogs });
    return;
  });
});

router.get('/furr-baby/:id', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Dog.findByPk(req.params.id).then((dogData) => {
    const dog = dogData.get();
    console.log(dog);
    res.render('dog', { dog });
    return;
  });
});

router.get('/location', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('location');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
