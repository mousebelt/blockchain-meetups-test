'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.BLOB
      },
      description: {
        type: Sequelize.BLOB
      },
      photoUrl: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.DATE
      },
      timeLocal: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      sourceId: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DOUBLE(25, 10)
      },
      lon: {
        type: Sequelize.DOUBLE(25, 10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      source: {
        type: Sequelize.ENUM('MEETUP', 'EVENTBRITE')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      groupId:{
        type: Sequelize.INTEGER,
        references: { model: 'Groups', key: 'id' },
      }
    }).then(() => queryInterface.addIndex('Groups', {
      unique: true,
      name: 'unique_link',
      fields: ['id'],
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};