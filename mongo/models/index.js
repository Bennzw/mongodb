const mongoose = require('mongoose');

// establishing connection for mongodb

const connection =  mongoose.createConnection('mongodb://localhost:27017/test');

module.exports={
    mongoose,connection
};