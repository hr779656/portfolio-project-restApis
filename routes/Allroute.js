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
const course_add = require('../controller/addcourse');
const course_get = require('../controller/get_course');
const student_course = require('../controller/studentCourse');
const allCourse = require('../controller/allcourse')


// Routers Registerd ===========
router.post('/register-student',[Rst_midware.Checked_user], addStudent.createStudent); 
router.post('/login',[token_verify.verifyToken], loginStudent.verifyUser);
router.get('/students', allStudents.getAllUser);
router.get('/students/:studentID', get_Ost.get_st);
router.post('/student/:studentID', update_student.updateUser);
router.delete('/student/:studentID', delete_Student.Delete_func);
router.post('/addcourse', course_add.addCourse);
router.get('/courses/:courseID', course_get.getCourse);
router.get('/coursesByStudent/:studentID', student_course.checked_st_cor);
router.get('/courses', allCourse.getAllCourses);

//  Export Statement ================
module.exports = router;