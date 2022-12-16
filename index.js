const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Mongo DB conncetion
mongoose.set('strictQuery', true);
const database = process.env.MONGODB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.set('view engine', 'ejs');

//BodyParsing
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', require('./routes/login'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server don start for port: " + PORT));