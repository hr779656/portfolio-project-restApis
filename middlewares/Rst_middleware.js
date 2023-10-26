//  Import Statement =============
const Rst_schema = require('../models')
const validationEmail = require('../controller/registerdStudents')

//  this Function Checked user add In DB Or NOt ==========
const Checked_user = async (req, res, next)=>{
    const {email} = req.body;
    cleanedEmail = email.trim().toLowerCase()

    if(validationEmail.isValidEmail(cleanedEmail)){
    const user_confirmed = await Rst_schema.Student_Register.findOne({where: {email : cleanedEmail}})
    if(user_confirmed){
        res.status(301).json({msg: "this user has Already registerd Go to login"})
    }else{
        next()
    }
  }else{
     res.status(400).json({ error: 'Please provide a full email address like @gmail.com'});
  }
}

//  Exports ============

module.exports = {
    Checked_user
};