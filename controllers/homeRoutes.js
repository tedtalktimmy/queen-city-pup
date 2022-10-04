const router = require('express').Router();
const { User, Dog, Location, UserLocation } = require('../models');
const pullAllBy = require('lodash.pullallby');

router.get('/', async (req, res) => {
  // const userData = await User.findAll();
  // const users = userData.map((user) => user.get());
  res.render('index', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  const user = await User.findOne({
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Dog,
        attributes: ['dog_name', 'image', 'about'],
      },
    ],
  });
  const userData= user.get({plain:true});
  console.log(userData);
  res.render('dashboard', userData);
});

router.get('/stores', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('login');
    return;
  }
  res.render('stores',{loggedIn: (req.session.loggedIn)});
});
router.get('/dates', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('login');
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
    let dogs = dogData.map((dog) =>
      dog.get({
        plain: true,
      })
    );
    let featured = dogs.filter(dog => dog.featured);
    pullAllBy(dogs, [{ featured: true }], 'featured');
    console.log('DOGS', dogs);
    console.log('FEATURED', featured);
    // console.log(dogs[0].user.locations);
    res.render('allDogs', { featured, dogs, loggedIn: req.session.loggedIn });
    return;
  });
});

router.get('/furr-baby/:id', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
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
  if (!req.session.loggedIn) {
    res.redirect('login');
    return;
  }

  res.render('location', {loggedIn: req.session.loggedIn});
});

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
