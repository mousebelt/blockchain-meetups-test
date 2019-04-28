"use strict";

import uuid from "uuid";

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define(
        "Group",
        {
            created: DataTypes.DATE,
            source: DataTypes.ENUM(["MEETUP", "EVENTBRITE"]),
            name: DataTypes.STRING,
            url: DataTypes.STRING,
            photoUrl: DataTypes.STRING,
            sourceId: DataTypes.STRING
        },
        {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false
        }
    );
    Group.associate = models => {
        Group.hasMany(models.Event, {
            foreignKey: "group"
        });
    };

    Group.beforeCreate(group => {
        group.id = uuid();
        group.created = Date.now();
    });

    return Group;
};
