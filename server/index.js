const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT || 5000;
const cors = require('cors');

const user = require('./routes/api/user');

const app = express();

app.use(cors());

// DB config
const db = require('./config/keys').mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

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
