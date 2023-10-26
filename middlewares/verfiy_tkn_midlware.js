//  import statement =====================
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Student_DB = require("../models")
// const validationEmail = require("../controller/registerdStudents");

// verify token function =================
const verifyToken = async (req, res, next) => {
   const token = req.headers['x-access-token'];
   
   if (!token) {
     return res.status(401).json({ msg: 'Token missing' });
   }
 
   try {
     const verifyToken = jwt.verify(token, process.env.SECRETKEY);
     const emailFromToken = verifyToken.email;
 
     // Fetch student email from your database
     const student = await Student_DB.Student_Register.findOne({ where: { email: emailFromToken } });
 
     if (student) {
       // If the student exists in the database, allow the request to proceed
       next();
     } else {
       res.status(401).json({ msg: 'Student not registered' });
     }
   } catch (error) {
     res.status(401).json({ msg: 'Token verification failed' });
   }
 };


//  Exports ====================
module.exports = { verifyToken }