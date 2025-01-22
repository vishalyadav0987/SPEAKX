const mongoose = require('mongoose');

const connectDB = (URI) => {
    return mongoose.connect(URI).then(() => {
        console.log('Connected to the database');
    }).catch((error) => {
        console.log('Error while connecting to the database', error.message);
    }
    );
}

module.exports = connectDB;