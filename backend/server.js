const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
var cors = require('cors');

const app = express();

// Models
require('./models/loadModels');

// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connect
require('./config/dbconnect');

// Mongoose Config
// require('./config/mongoose');

// Passport Config
// app.use(passport.initialize());
// require('./config/passport')(passport);

// Cors Middleware
app.use(cors());

// Routes
app.use('/api/info', (req, res) => res.send('Fit Court App API'));
app.use('/api/meal', require('./routes/meal'));
// app.use('/api/order', require('./routes/order'));
// app.use('/api/meal', require('./routes/meal'));

const port = process.env.PORT || 4950;

app.listen(port, () => console.log(`Server started on port ${port}`));
