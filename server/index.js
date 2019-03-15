const express = require('express');
const mongoose = require('mongoose');
const port = 5000;
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI);

app.get('/', (req, res)=>{
    res.send({hello: 'there'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))