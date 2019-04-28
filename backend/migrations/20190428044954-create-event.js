"use strict";

const uuid = require("uuid/v4");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Events", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuid()
            },
            created: {
                allowNull: false,
                type: Sequelize.DATE
            },
            source: {
                type: Sequelize.ENUM(["MEETUP", "EVENTBRITE"])
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.BLOB
            },
            url: {
                type: Sequelize.STRING
            },
            photoUrl: {
                type: Sequelize.STRING
            },
            sourceId: {
                type: Sequelize.STRING
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
            lat: {
                type: Sequelize.FLOAT(10, 6)
            },
            lon: {
                type: Sequelize.FLOAT(10, 6)
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Events");
    }
};
