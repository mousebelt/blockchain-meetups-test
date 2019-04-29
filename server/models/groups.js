'use strict';
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    source: {
      type: DataTypes.ENUM('MEETUP', 'EVENTBRITE'),
    },
    name: {
      type: DataTypes.BLOB
    },
    url: {
      type: DataTypes.TEXT
    },
    photoUrl: {
      type: DataTypes.STRING
    },
    sourceId: {
      type: DataTypes.INTEGER
    },

  }, {charset: 'utf8mb4', decode: 'utf-8'});
  Groups.prototype.toString = function () {
    const { id, name, url, source,photoUrl, sourceId, createdAt, updatedAt  } = this;
    return { id, name: name.toString('utf8'), url, source,photoUrl, sourceId, createdAt, updatedAt}
  }
  Groups.associate = function (models) {
    // associations can be defined here
  };
  return Groups;
};