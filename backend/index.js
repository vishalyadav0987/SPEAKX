const express = require('express');
const connectDB = require('./connectDB/connect');
const app = express();
require('dotenv').config();
const port = 5000 || process.env.PORT;
const cors = require('cors');
const QuestionRoute = require('./routes/QuestionRoute')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/test', (req, res) => {
    res.send('This is the backend server testing route');
});
app.use('/api/v1/questions', QuestionRoute);
if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "..", "frontend", "dist");
    app.use(express.static(frontendPath));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(frontendPath, "index.html"))
    })
}


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
