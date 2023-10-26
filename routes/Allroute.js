//  import Statements ===========
const express = require('express');
const router = express.Router();
const addStudent = require('../controller/registerdStudents');
const Rst_midware = require('../middlewares/Rst_middleware');
const token_verify = require('../middlewares/verfiy_tkn_midlware');
const loginStudent = require('../controller/Login_st');
const allStudents = require("../controller/getAll_St");
const get_Ost = require("../controller/getOne_St");
const update_student = require("../controller/update_students");
const delete_Student = require("../controller/delete");


// Routers Registerd ===========
router.post('/register-student',[Rst_midware.Checked_user], addStudent.createStudent);
router.post('/login', loginStudent.verifyUser);
router.post('/students',[token_verify.verifyToken], allStudents.getAllUser);
router.post('/students/:studentID',[token_verify.verifyToken], get_Ost.get_st);
router.post('/student/:studentID', [token_verify.verifyToken], update_student.updateUser);
router.post('/delete-student/:studentID', [token_verify.verifyToken], delete_Student.Delete_func);

//  Export Statement ================
module.exports = router;