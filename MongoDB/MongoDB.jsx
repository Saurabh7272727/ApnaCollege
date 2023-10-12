const mongoose = require('mongoose');
const HomeData = require('../JsonData/HomeData.json');

mongoose.connect("mongodb+srv://asuslap4545:Ymdw4d7jyihxeD4k@saurabhdatabase.ffjmaxz.mongodb.net/BIT").then((err, data) => {
    console.log("mongoose is connected with database");
})

const mongooseNewData = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string', required: true
    },
    date: {
        type: "number"
    },
    branch: {
        type: 'string', required: true
    },
    email: {
        type: "string"
    },
    year: {
        type: 'string'
    },
    password: {
        type: "number", required: true
    }
})

const mongooseData = mongoose.model("SumitData-sigin", mongooseNewData);

module.exports = mongooseData;