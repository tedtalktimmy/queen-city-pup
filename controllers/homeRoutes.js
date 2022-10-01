const router = require('express').Router();
const { User, Dog, Location, UserLocation } = require('../models');

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
  Dog.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'email'],
        include: [
          {
            model: Location,
            through: UserLocation,
          },
        ],
      },
    ],
  }).then((dogData) => {
    const dogs = dogData.map((dog) =>
      dog.get({
        plain: true,
      })
    );
    console.log(dogs);
    console.log(dogs[0].user.locations);
    res.render('allDogs', { dogs });
    return;
  });
});

router.get('/furr-baby/:id', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  Dog.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ['name', 'email'],
        // include: [
        //   {
        //     model: Location,
        //     attributes: ['name'],
        //   },
        //   {
        //     model: Dog,
        //     attributes: ['dog_name'],
        //   },
        // ],
      },
    ],
  }).then((dogData) => {
    const dog = dogData.get({ plain: true });
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

module.exports = router;
