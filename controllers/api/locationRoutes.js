const router = require('express').Router();
const { Dog, User, Location } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const location = await Location.findAll();
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const location = await Location.findOne({
      include: [
        {
          model: User,
          attributes: ['name'],
          include: [
            {
              model: Dog,
              attributes: ['dog_name'],
            },
          ],
        },
      ],
    });
    if (!location) {
      res.status(404).json('No location found with that ID');
    }
    res.status(200).json(location);
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

module.exports = router;