const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const User = require("./models/User");



dotenv.config();


mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to MongoDB server');


});

// Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.listen(3000, () => {
    console.log("Backend server is running");


})