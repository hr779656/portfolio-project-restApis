// Import Statement ==================

const courses_sch = require('../models')

// Get One Course Function ==========

const getCourse = async (req, res)=>{

    try{
        const course = await courses_sch.courses.findByPk(req.params.courseID)
        if(course){
            res.status(200).json({msg: "your course found", Data: course})
        }
        else{
            res.status(400).send("your course is not Found")
        }
    }catch(err){
        res.status(400).json({msg: 'Failed To get Course'})
    }
}

// Exports ===========

module.exports = {getCourse}