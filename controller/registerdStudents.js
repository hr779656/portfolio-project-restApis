//  important Statements ========
const db = require("../models")
const  jwt = require('jsonwebtoken')
require('dotenv').config()

// StudentRegister Schema =================
const R_Student = db.Student_Register;

//  Student add in Database Function ==============
const createStudent = async (req, res)=>{
    let {studentName, email, password} = req.body;

    studentName = studentName.trim().toLowerCase();
    cleanedEmail = email.trim().toLowerCase();
    password = password.trim().toLowerCase();  

    if(isValidEmail(cleanedEmail)) {
   try{ R_Student.create({
        studentName: studentName,
        email: cleanedEmail,
        password: password
    }).then((result)=>{
        // Genrate A token ============
        const token = jwt.sign({email: result.email}, process.env.SECRETKEY);
        res.status(200).json({msg: "student Register Successfully in dataBase", data: result, Token: token})
   })
    }catch(err){
        res.status(400).json({err: "Failed to register a student"})
    }
}else {
    res.status(400).json({ error: 'Please provide a full email address like @gmail.com'});
  }
}


// Checked function this Email is Valid or not ======

function isValidEmail(email){
    return email.includes('@gmail') && email.includes('.com');
}

module.exports = {createStudent, isValidEmail}