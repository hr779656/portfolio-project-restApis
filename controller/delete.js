//  import statement =========

const student_schema = require('../models')


//  Delete Student Function ===========

const Delete_func = async (req, res)=>{
    let student_id = req.params.studentID;

    try{
            const student_data = await student_schema.Student_Register.findByPk(student_id)
            const Student_delete = await student_schema.Student_Register.destroy({
               where: {id: student_id}
            })

            if(Student_delete){
                res.status(200).json({msg: 'Delete This Student', data : student_data})
            }
            else{
                res.status(301).json({msg: 'user not Found'})
            }

    }catch(err){
        res.status(401).json({msg: err})
    }
}

//  Exports =========== 

module.exports = {Delete_func}
