"use strict";

import uuid from "uuid";

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define(
        "Event",
        {
            created: DataTypes.DATE,
            source: DataTypes.ENUM(["MEETUP", "EVENTBRITE"]),
            name: DataTypes.STRING,
            description: DataTypes.BLOB,
            url: DataTypes.STRING,
            photoUrl: DataTypes.STRING,
            sourceId: DataTypes.STRING,
            time: DataTypes.DATE,
            timeLocal: DataTypes.STRING,
            country: DataTypes.STRING,
            city: DataTypes.STRING,
            lat: DataTypes.FLOAT(10, 6),
            lon: DataTypes.FLOAT(10, 6)
        },
        {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false
        }
    );
    Event.associate = models => {
        Event.belongsTo(models.Group, {
            onDelete: "CASCADE",
            foreignKey: "group"
        });
    };

    Event.beforeCreate(event => {
        event.id = uuid();
        event.created = Date.now();
    });

    return Event;
};
