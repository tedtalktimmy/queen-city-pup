const User = require('./User');
const Dog = require('./Dog');
const Location = require('./Location');

User.hasMany(Dog, {
  foreignKey: 'owner_id',
  //onDelete: 'CASCADE',
});

Dog.belongsTo(User, {
  foreignKey: 'owner_id',
});
Location.hasMany(User, {
  foreignKey: 'location_id',
});

User.hasMany(Location, {
  foreignKey: 'location_id',
});

module.exports = { User, Dog, Location };
