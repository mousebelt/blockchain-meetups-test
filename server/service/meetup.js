const { keywords } = require('../filterConfig');
const models = require('../models');
const moment = require('moment');


const createGroup = async (group = {}) => {
    try {
        const cond = await models.Groups.findOne({ where: { sourceId: group.id } })
        if (!cond) {
            const newGroup = await models.Groups.create({
                name: `${group.name}`,
                sourceId: group.id,
                photoUrl: group.group_photo ? group.group_photo.thumb_link : '',
                url: group.url,
            })
            return newGroup;
        }
        return cond
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (obj) => {
    try {
        const cond = await models.Events.findOne({ where: { sourceId: obj.id } })
        if (!cond) {
            const group = await createGroup(obj.group)
            const newEvent = await models.Events.create({
                url: obj.event_url,
                name: obj.name,
                description: `${obj.description}`,
                photoUrl: cond ? cond.photoUrl : '',
                time: Date(moment(obj.time)._d),
                timeLocal: Date(moment().utcOffset(obj.utc_offset)._d),
                country: obj.venue ? obj.venue.country : '',
                city: obj.venue ? obj.venue.city : '',
                lat: obj.venue ? obj.venue.lat : 0.1,
                lon: obj.venue ? obj.venue.lon : 0.1,
                groupId: group.id,
                sourceId: obj.id,
                source: "MEETUP"

            })
        }
    } catch (error) {
        console.log(error)
    }
}

const eventFilter = (obj) => {
    let condition = false
    const { name, description, source } = obj;
    for (const key in keywords) {
        if (name.toLowerCase().indexOf(keywords[key]) !== -1 || (description && description.toLowerCase().indexOf(keywords[key]) !== -1)) {
            condition = true
            createUser(obj)
            return
        }
    }
    return condition // bool
}


module.exports = {
    eventFilter
}
