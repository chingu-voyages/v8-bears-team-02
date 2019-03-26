const express = require('express');
const mongoose = require('mongoose');
const port = 5000;
const keys = require('./config/keys');

const app = express();

// Add setting to useNewUrlParser. This can also be set globally.
mongoose.connect(keys.mongoURI,  { useNewUrlParser: true }).then(() => {
    console.log('established database connection successfully');
}, err => console.log('something went wrong when connecting to database'));

app.get('/', (req, res)=>{
    res.send({hello: 'there'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))