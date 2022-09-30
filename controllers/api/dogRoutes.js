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

module.exports = router;
