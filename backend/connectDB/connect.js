const mongoose = require('mongoose');

const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI, {
           
            socketTimeoutMS: 30000,
            connectTimeoutMS: 30000,
        });
        console.log('Connected to the database 🎉');
    } catch (error) {
        console.error('Error while connecting to the database:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
