const router = require('express').Router();
const { User, Dog, Location } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Dog,
          attributes: ['dog_name'],
        },
        {
          model: Location,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Dog,
          attributes: ['name'],
        },
        {
          model: Location,
          attributes: ['name'],
        },
      ],
    });
    if (!user) {
      res.status(404).json('No user found with that ID');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('Post::signup::req.body = ', req.body);
    const userData = await User.create({name: req.body.name, email: req.body.email, password: req.body.password });
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('req.body = ', req.body);
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now a part of our pack!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
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
router.put('/', async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.session.user_id,
      },
    });
    if (!user) {
      res.status(404).json('No user found with that ID');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.session.user_id,
      },
    });
    if (!user) {
      res.status(404).json('No user found with that ID');
    }
    req.session.destroy(() => {
      res.status(204).end().json('User has been deleted successfully');
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
