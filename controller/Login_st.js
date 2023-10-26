// import statements ================
require('dotenv').config()
const validationEmail =  require('../controller/registerdStudents')
const jwt = require('jsonwebtoken')


//  this function checked User Matched ============
const verifyUser = async (req, res, next)=>{

   const {email} = req.body;
   const token = req.headers["x-access-token"];
   cleanedEmail = email.trim().toLowerCase()
   const verifyToken = jwt.verify(token, process.env.SECRETKEY);
   
    if(validationEmail.isValidEmail(cleanedEmail)){
      if(verifyToken.email === cleanedEmail){
        res.status(200).json({msg: "you have sucessfully Login"})
      }else{
        res.status(401).json({msg: "This Student is Not Registerd"})
      }
    }
    else{
        res.status(400).json({ error: 'Please provide a full email address like @gmail.com'});
    }
  }

//  Exports ==========

module.exports = { verifyUser }