const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// create application
const app = express();

// env
require('dotenv').config();


// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.listen(process.env.PORT, error => {
    if (error) throw error;
    console.log(`Server 🚀 🚀 🚀 🚀 🚀  running on port ${process.env.PORT} `);
});