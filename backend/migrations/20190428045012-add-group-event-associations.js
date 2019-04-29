"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
        return queryInterface.addColumn(
            "Events", // name of Source model
            "group", // name of the key we're adding
            {
                type: Sequelize.UUID,
                references: {
                    model: "Groups", // name of Target model
                    key: "id" // key in Target model that we're referencing
                },
                onDelete: "CASCADE"
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a prldomise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
        return queryInterface.removeColumn(
            "Events", // name of Source model
            "group" // key we want to remove
        );
    }
};
