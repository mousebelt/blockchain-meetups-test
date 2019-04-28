import express from "express";
import meetup_api from "meetup-api";
import { sequelize, Sequelize, Group, Event } from "./models";
import cors from "cors";
const app = express();
const PORT = 4000;
const MEETUP_API_KEY = "3c406814817563f711b4b107d66a69";
const Op = Sequelize.Op;

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to MySQL successfully!");
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

app.use(cors());

app.get("/", (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.get("/events/upcoming", async (req, res) => {
    try {
        let limit = eval(req.query.limit || 12);
        let offset = eval(req.query.offset || 0);

        let all_events = await Event.findAndCountAll({
            attributes: ["id"],
            where: {
                time: {
                    [Op.gt]: Date.now()
                }
            }
        });

        let pages = Math.ceil(all_events.count / limit);

        let events = await Event.findAll({
            limit: limit,
            offset: offset,
            order: [["time", "ASC"]],
            where: {
                time: {
                    [Op.gt]: Date.now()
                }
            }
        });

        res.status(200).json({
            result: events,
            count: all_events.count,
            pages: pages
        });
    } catch (err) {
        console.log(err);

        res.status(500).send("Internal Server Error");
    }
});

app.get("/events/upcoming/city", async (req, res) => {
    try {
        let limit = eval(req.query.limit || 12);
        let offset = eval(req.query.offset || 0);
        let country = req.query.country;
        let city = req.query.city;

        let where_conditions = {
            time: {
                [Op.gt]: Date.now()
            }
        };

        if (country) {
            where_conditions["country"] = {
                [Op.eq]: country
            };
        }

        if (city) {
            where_conditions["country"] = {
                [Op.eq]: city
            };
        }

        let all_events = await Event.findAndCountAll({
            attributes: ["id"],
            where: where_conditions
        });

        let pages = Math.ceil(all_events.count / limit);

        let events = await Event.findAll({
            limit: limit,
            offset: offset,
            order: [["time", "ASC"]],
            where: where_conditions
        });

        res.status(200).json({
            result: events,
            count: all_events.count,
            pages: pages
        });
    } catch (err) {
        console.log(err);

        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var meetup = meetup_api({
    key: MEETUP_API_KEY
});

var count = 1;

const update_db = async obj => {
    try {
        let group = await Group.findOne({
            where: {
                sourceId: obj.group.id
            }
        });

        if (group === null) {
            group = await Group.create({
                source: "MEETUP",
                name: obj.group.name,
                url: obj.group.urlname,
                photoUrl:
                    typeof obj.group.group_photo === "undefined"
                        ? ""
                        : obj.group.group_photo.thumb_link,
                sourceId: obj.group.id
            });

            console.log(
                `A new group '${obj.group.name}' is created successfully.`
            );
        }

        let event = await Event.findOne({
            where: {
                sourceId: obj.id
            }
        });

        if (event === null) {
            const now = new Date();
            const timeLocal = new Date(
                obj.time + obj.utc_offset + now.getTimezoneOffset() * 60000
            );
            event = await group.createEvent({
                source: "MEETUP",
                name: obj.name,
                description: obj.description,
                url: obj.event_url,
                photoUrl: obj.photo_url,
                sourceId: obj.id,
                time: obj.time,
                timeLocal: timeLocal.toLocaleString(),
                country:
                    typeof obj.venue !== "undefined" &&
                    typeof obj.venue.country !== "undefined"
                        ? obj.venue.country
                        : "",
                city:
                    typeof obj.venue !== "undefined" &&
                    typeof obj.venue.city !== "undefined"
                        ? obj.venue.city
                        : "",
                lat:
                    typeof obj.venue !== "undefined" &&
                    typeof obj.venue.lat !== "undefined"
                        ? obj.venue.lat
                        : "",
                lon:
                    typeof obj.venue !== "undefined" &&
                    typeof obj.venue.lon !== "undefined"
                        ? obj.venue.lon
                        : ""
            });

            console.log(`A new event '${obj.name}' is created successfully.`);
        }
    } catch (err) {
        console.log(err);
    }
};

var ovs = meetup.getStreamOpenEvents({
    since_mtime: Date.now()
});

ovs.on("data", async function(obj) {
    if (count <= 1000) {
        await update_db(obj);
    } else {
        ovs.abort();
    }
    count++;
}).on("end", function() {
    console.log("Done!");
});
