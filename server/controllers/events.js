
const models = require('../models');

const getEventsDate = async (req, res) => {
  try {
    console.log(req.query)
    let { limit, offset } = req.query;

    const events = await models.Events.findAll({
      include: ['group'],
      offset: +offset || 0,
      limit: +limit || 12
    })
    const list = events.map(elem => elem.toString())
    res.json(list)

  } catch (error) {
    console.log(error)
  }
}
const getEventsLocation = async (req, res) => {
  let { limit, offset, country, city } = req.query;
  const reqQuery = city ? { country, city } : { country }
  console.log(req.query)
  const events = await models.Events.findAll({
    where: reqQuery,
    include: ['group'],
    offset: +offset || 0,
    limit: +limit || 12,

  })
  // if(!events) return res.json([])
  const list = events.map(elem => elem.toString())
  res.json(list)
}

module.exports = {
  getEventsDate,
  getEventsLocation
}