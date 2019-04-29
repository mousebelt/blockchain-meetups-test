const express = require('express');
const router = express.Router();
const { getEventsDate, getEventsLocation } = require('../controllers/events');

router.get('/events/upcoming',getEventsDate);
router.get('/events/upcoming/city',getEventsLocation);

module.exports = router;