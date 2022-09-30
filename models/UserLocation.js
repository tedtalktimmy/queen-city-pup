const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserLocation extends Model {}

UserLocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_location',
  }
);
module.exports = UserLocation;