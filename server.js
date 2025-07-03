const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
   res.send("hello world");
})

app.get('/Home',(req,res)=>{
   res.send('welcome home daddy');
})

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})