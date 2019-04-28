"use strict";

const uuid = require("uuid/v4");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Groups", {
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
            url: {
                type: Sequelize.STRING
            },
            photoUrl: {
                type: Sequelize.STRING
            },
            sourceId: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Groups");
    }
};
