// Import Statement ==============
const  get_Student = require('../models');


//  this function worked Get one student ==========

const get_st = async (req, res)=>{
    const userId = req.params.studentID;
   try{
     const student = await get_Student.Student_Register.findByPk(userId)
     if(student){
        res.status(200).json({data: student})
     }else{
        res.status(301).json({msg: "User Not Found"})
     }
   }catch(err){
     res.status(400).json({msg: err})
   }
}

//  Exports ===========

module.exports = {get_st}
