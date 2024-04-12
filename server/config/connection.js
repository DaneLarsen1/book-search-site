// require("dotenv").config();
const mongoose = require('mongoose');
// const uri = "mongodb+srv://danelarsen12:Familyfun1@cluster0.egapl0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
module.exports = mongoose.connection;