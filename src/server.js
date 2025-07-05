const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db.js');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


// connectDB();


app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})