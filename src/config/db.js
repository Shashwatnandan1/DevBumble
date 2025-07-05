const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const MongUrl = process.env.MONGO_URI;

const connectDB = () => {
    mongoose.connect(MongUrl)
        .then(() => {
            console.log('MongoDB connected');
        })
        .catch((err) => {
            console.log(`Error occurred: ${err}`);
        });
};

module.exports = {
    connectDB,
};
