const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');
const User = require('./models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://DAT:Tolu1329@cluster0.oetks32.mongodb.net/usercollection?retryWrites=true&w=majority")
    .then(() => {
        console.log("connected to database");

            // Use routes defined in routes.js
            app.use('/', routes);

            // Start the server
            app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            });
        });