const express = require('express');
const dotenv = require('dotenv');

const { adminauth } = require('./Middlewares/auth');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


app.use('/admin',adminauth);

app.get('/admin/user',(req,res)=>{
    const {name,age,gender} = req.query;
    res.status(200).send(`name is : ${name},age is ${age} , gender is ${gender}`);
})

app.get('/person',(req,res)=>{
  res.send('we are here');
})



app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})