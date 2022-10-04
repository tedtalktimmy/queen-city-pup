const sequelize = require('../config/connection');
const { User, Dog, Location, UserLocation } = require('../models');

// const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Location.create({
    name: 'Pineville',
  });
  await Location.create({
    name: 'South End',
  });
  await Location.create({
    name: 'North Side',
  });
  await Location.create({
    name: 'Steel Creek',
  });
  await Location.create({
    name: 'Myers park',
  });
  await Location.create({
    name: 'Ballantyne',
  });
  await Location.create({
    name: 'Plaza Midwood',
  });
  await Location.create({
    name: 'NoDa',
  });

  await User.create({
    name: 'Ralph',
    email: 'ralph@aol.com',
    password: '12dfghdfh345678',
  });
  await User.create({
    name: 'Jenny',
    email: 'jenny@jenny.com',
    password: '125dfg6778',
  });
  await User.create({
    name: 'Matt',
    email: 'matt@me.com',
    password: 'ssdhfgfgfoushfi',
  });
  await User.create({
    name: 'Juanita',
    email: 'jjy@comcast.net',
    password: 'lovemypup56',
  });
  await User.create({
    name: 'John',
    email: 'jpm@me.com',
    password: 'create$U98765',
  });
  await User.create({
    name: 'Jill',
    email: 'jill@yahoo.com',
    password: 'ght56dfh78',
  });
  await User.create({
    name: 'Bob',
    email: 'bob@yahoo.com',
    password: '12345678',
  });
  await Dog.create({
    dog_name: 'Buddy',
    about:
      'Buddy loves to chase and be chased! He drives the squirrels crazy...but he is super friendly with other dogs. He is available to play anytime...just message us and we will set something up!',
    image: '/images/buddy.jpg',
    owner_id: 1,
  });
  await Dog.create({
    dog_name: 'Sparky',
    about:
      'Looking for a playdate that will wear your dog out? Meet up with Sparky! He loves to run and investigate and is happy with friends to play with. However, he is on the smaller side so if your dog is an alpha and larger - let us know when you message.',
    image: '/images/sparky.jpg',
    owner_id: 2,
    featured: true,
  });
  await Dog.create({
    dog_name: 'Rover',
    about: 'Loves other dogs, playing fetch and eating treats.',
    image: '/images/rover.jpg',
    owner_id: 2,
  });
  await Dog.create({
    dog_name: 'Max',
    about:
      'Max is a supersmart team player...he will engage your dog in games of tag and friendly wrestling. He is about 50 pounds of lovable fun.',
    image: '/images/max.jpg',
    owner_id: 3,
    featured: true,
  });
  await Dog.create({
    dog_name: 'Dexter',
    about:
      'Dexter is a very curious puppy with tons of energy. We are looking for older dogs to teach him a few manners in the park but he is harmless otherwise.',
    image: '/images/dexter.jpg',
    owner_id: 4,
  });
  await Dog.create({
    dog_name: 'Brady',
    about:
      'Big, beautiful Brady...super sweet but territorial of his family. He likes to play one on one with larger dogs...maostly chasing and wrestling. We are willing to drive anywhere to meet up.',
    image: '/images/brady.jpg',
    owner_id: 5,
  });
  await Dog.create({
    dog_name: 'Zeus',
    about:
      'Super smart and sweet shepherd...Zues likes to have fun with all the dogs in the park but is quick to roll over when an alpha comes along. Very friendly and great with smaller dogs who need a big brother.',
    image: '/images/zeus.jpg',
    owner_id: 6,
  });
  await Dog.create({
    dog_name: 'Bentley',
    about:
      'Bentley is learning how to play well with others. He loves dog parks and likes to run all over the equipment. He is a big sniffer.',
    image: '/images/bentley.jpg',
    owner_id: 5,
  });
  await Dog.create({
    dog_name: 'Sadie',
    about: 'Sadie is very sweet and playful. She likes other dogs.',
    image: '/images/sadie.jpg',
    owner_id: 6,
  });

  await UserLocation.create({
    user_id: 1,
    location_id: 1,
  });

  await UserLocation.create({
    user_id: 2,
    location_id: 2,
  });

  await UserLocation.create({
    user_id: 3,
    location_id: 3,
  });

  await UserLocation.create({
    user_id: 4,
    location_id: 5,
  });

  await UserLocation.create({
    user_id: 5,
    location_id: 6,
  });

  await UserLocation.create({
    user_id: 6,
    location_id: 7,
  });

  console.log('data seeded');
  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
