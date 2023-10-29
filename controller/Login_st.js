// import statements ================
require('dotenv').config()
const validationEmail =  require('../controller/registerdStudents')
const St_schema = require('../models')


//  this function checked User Matched ============
const verifyUser = async (req, res)=>{

   let {studentName, email, password} = req.body;

   cleanedEmail = email.trim().toLowerCase()
   studentName = studentName.trim().toLowerCase()
   password = password.trim().toLowerCase()

    if(validationEmail.isValidEmail(cleanedEmail)){
      const validStudent = await St_schema.Student_Register.findOne({
        where: {studentName: studentName, email: cleanedEmail, password: password}
      }) 
      if(!validStudent){
        res.status(400).json({msg : 'student login failed'})
      }else{
        res.status(200).json({msg: 'Student SucessFully Login'})
      }
    }
    else{
        res.status(400).json({ error: 'Please provide a full email address like @gmail.com'});
    }
  }

//  Exports ==========

module.exports = { verifyUser }