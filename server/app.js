const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const meetup = require('meetup-api')({key: process.env.MEETUP_KEY});
const { eventFilter } = require('./service/meetup');
const eventsRouter = require('./routes/events');


// create application
const app = express();

// env
require('dotenv').config();

meetup.getStreamOpenEvents({ since_mtime: 1104435118533 }).on('data', (obj) => {
    if(eventFilter(obj)){
        // console.log(obj)
    }
})
.on('done', () => {
    console.log('done')
});

app.use(cors())

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", eventsRouter);



app.listen(process.env.PORT, error => {
    if (error) throw error;
    console.log(`Server 🚀 🚀 🚀 🚀 🚀  running on port ${process.env.PORT} `);
});