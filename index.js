const express = require('express');
require('./models/User');
require('./services/passport');

const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');

const app = express();

// mongoose.connect(keys.mongoURI);
connectDB();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
