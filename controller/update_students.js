// import statement ===========
const st_schema = require('../models');
const validationEmail = require('./registerdStudents')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Student update Function ==============
const updateUser = async (req, res)=>{
        const userID = req.params.studentID;
        let {studentName, email, password} = req.body;

    studentName = studentName.trim().toLowerCase();
    cleanedEmail = email.trim().toLowerCase();
    password = password.trim().toLowerCase();

    if(studentName != '' && password != ''){
          
        const student = await st_schema.Student_Register.findByPk(userID)

    if(!student){
        res.status(404).json({msg: "User Not Found"})
    }

    if(validationEmail.isValidEmail(cleanedEmail)){
        student.studentName = studentName,
        student.email = cleanedEmail,
        student.password = password

        await student.save()
        const update_token = jwt.sign({email: student.email}, process.env.SECRETKEY)
        res.status(200).json({msg: 'Student update', data: student, token: update_token})
    }else{
        res.status(400).json({ error: 'Please provide a full email address like @gmail.com'});
    }
    }else{
        res.status(400).json({msg: 'student updation Failed'})
    }
    
}

// exports =========
module.exports = {updateUser}