const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const cors = require('cors');
const blocks = require('./routes/blocks')

const app = express();
const port = process.env.PORT || "8080";

const db = require('./db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/blocks', blocks);
app.listen(port, () => console.log(`Server running on port ${port}`))