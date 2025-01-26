const mongoose = require('mongoose');

const connectDB = (URI) => {
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 30000, // Timeout after 30 seconds
        connectTimeoutMS: 30000, // Connection timeout after 30 seconds
    }).then(() => {
        console.log('Connected to the database');
    }).catch((error) => {
        console.error('Error while connecting to the database:', error.message);
    });
}

module.exports = connectDB;
