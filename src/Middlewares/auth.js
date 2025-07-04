const adminauth = (req,res,next)=>{
  console.log('admini is getting checked');
  const {password} = req.query;
  if(password === 'xyz'){
    next();
  }else{
    res.status(401).send('Incorrect');
  }
};

module.exports = {
    adminauth,
}