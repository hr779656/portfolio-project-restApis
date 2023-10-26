// Import Statements ================= 
const students = require('../models')


//  Get All Students Function ==============

const getAllUser = async (req, res)=>{
    try{

    const Students = await students.Student_Register.findAll();
    res.status(200).json({data: Students})

    }catch(err){
        res.status(400).json({error: err})
    }
}

//  Exports ===========

module.exports = { getAllUser }