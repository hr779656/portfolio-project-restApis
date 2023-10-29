// Import Statements ================= 
const courses_sch = require('../models');


//  Get All courses ==============

const getAllCourses = async (req, res)=>{
    try{

    const allCourse = await courses_sch.courses.findAll()
    res.status(200).json({data: allCourse})

    }catch(err){
        res.status(400).json({err: "failed Get courses"})
    }
}

//  Exports ===========

module.exports = { getAllCourses }