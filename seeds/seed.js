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
  await Dog.create({
    dog_name: 'Buddy',
    about: 'ihsdkfghsli',
    image: '/images/buddy.jpg',
    owner_id: 1,
  });
  await Dog.create({
    dog_name: 'Sparky',
    about: 'lorem sdjkhfsdj',
    image: '/images/sparky.jpg',
    owner_id: 2,
  });
  await Dog.create({
    dog_name: 'Rover',
    about: 'sdhfiuhsdrlirgh',
    image: '/images/rover.jpg',
    owner_id: 2,
  });
  await Dog.create({
    dog_name: 'Max',
    about: 'dfiugsrkrugfsh',
    image: '/images/max.jpg',
    owner_id: 3,
  });
  await Dog.create({
    dog_name: 'Dexter',
    about: 'dhfhzsdgf',
    image: '/images/dexter.jpg',
    owner_id: 4,
  });
  await Dog.create({
    dog_name: 'Brady',
    about: 'fiughgrh',
    image: '/images/brady.jpg',
    owner_id: 5,
  });
  await Dog.create({
    dog_name: 'Zeus',
    about: 'foghlidrbuhgdijg',
    image: '/images/zeus.jpg',
    owner_id: 6,
  });
  await Dog.create({
    dog_name: 'Bentley',
    about: 'djhfiseruhindrgh',
    image: '/images/zeus.jpg',
    owner_id: 5,
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
    location_id: 4,
  });

  await UserLocation.create({
    user_id: 1,
    location_id: 4,
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
