'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    photoUrl: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.DATE
    },
    timeLocal: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING,
     
    },
    city: {
      type: DataTypes.STRING,
     
    },
    sourceId: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.FLOAT(5, 4)
    },
    lon: {
      type: DataTypes.FLOAT(5, 4)
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },

    source: {
      type: DataTypes.ENUM('MEETUP', 'EVENTBRITE')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    groupId: {
      type: DataTypes.INTEGER,
      references: { model: 'Groups', key: 'id' },
    }
  }, { charset: 'utf8mb4', decode: 'utf-8' });

  Events.prototype.toString = function () {
    const { id, name, url, country, city, sourceId, source, updatedAt, createdAt, lat, lon, photoUrl, description, group } = this;
    return {
      id,
      name: name.toString('utf8'),
      url,
      country,
      city,
      sourceId,
      source,
      updatedAt,
      createdAt,
      lat,
      lon,
      description: description.toString('utf8'),
      photoUrl,
      group: group.toString()
      
    }
  }
  Events.associate = function (models) {
    // associations can be defined here
    Events.belongsTo(models.Groups, { foreignKey: 'groupId', as: 'group' })

  };
  return Events;
};