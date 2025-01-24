const express = require('express');
const connectDB = require('./connectDB/connect');
const app = express();
require('dotenv').config();
const port = 3000 || process.env.PORT;
const cors = require('cors');
const QuestionRoute = require('./routes/QuestionRoute')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/test', (req, res) => {
    res.send('This is the backend server testing route');
});
app.use('/api/v1/questions', QuestionRoute);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log('Error while starting the server', error.message);
    }
}

start();
