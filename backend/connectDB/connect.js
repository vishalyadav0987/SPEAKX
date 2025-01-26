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

// const mongoose = require('mongoose');

// const connectDB = async (URI) => {
//     try {
//         await mongoose.connect(URI, {
           
//             socketTimeoutMS: 30000,
//             connectTimeoutMS: 30000,
//         });
//         console.log('Connected to the database 🎉');
//     } catch (error) {
//         console.error('Error while connecting to the database:', error.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;
