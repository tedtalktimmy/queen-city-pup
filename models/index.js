const User = require('./User');
const Dog = require('./Dog');
const Location = require('./Location');
const UserLocation = require('./UserLocation');

User.hasMany(Dog, {
  foreignKey: 'owner_id',
  //onDelete: 'CASCADE',
});
Dog.belongsTo(User, {
  foreignKey: 'owner_id',
});
Location.belongsToMany(User, {
  through: UserLocation,
  foreignKey: 'location_id',
});

User.belongsToMany(Location, {
  through: UserLocation,
  foreignKey: 'user_id',
});

module.exports = { User, Dog, Location, UserLocation };
