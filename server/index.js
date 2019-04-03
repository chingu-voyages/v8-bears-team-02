const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const user = require('./routes/api/user');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDb
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send({ hello: 'there' });
});

// Use Routes
app.use('/api/user', user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
