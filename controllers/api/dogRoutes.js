const router = require('express').Router();
const { Dog, User, Location } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dogs = await Dog.findAll({
      include: [
        {
          model: User,
          // attributes: ['name'],
          // include: [
          //   {
          //     model: Location,
          //     attributes: ['name'],
          //   },
          // ],
        },
      ],
    });
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dog = await Dog.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          // attributes: ['name', 'email'],
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
    });
    if (!dog) {
      res.status(404).json('No dog found with that ID');
    }
    res.status(200).json(dog);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const dog = await Dog.create(req.body);
    res.status(200).json(dog);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const dog = await Dog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dog) {
      res.status(404).json('No dog found with that ID');
    }
    res.status(200).json(dog);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dog = await Dog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!dog) {
      res.status(404).json('No dog found with that ID');
    }
    res.status(200).json('Dog has been deleted successfully');
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all dishes
router.get('/', async (req, res) => {
  res.render('all', {dog});
});

// get one dish
router.get('/dog/:num', async (req, res) => {
  const found = dogs.find(dog => +dog.id === +req.params.num);
  return res.render('dogs', dogs[req.params.num - 1]);
});

// get one dish
router.get('/dog/by-name/:name', async (req, res) => {
  const nameParam = req.params.name.trim().toLowerCase().replaceAll(' ', '-');
  const found = dogs.find(dog => dog.dog_name.toLowerCase().replaceAll(' ', '-') === nameParam);
  console.log(nameParam);
  return res.render('dog', { dog: found });
});

module.exports = router;
