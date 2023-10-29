//  import Statement ================

const course = require('../models')


// addcourse Function ==============

const addCourse = async (req, res) => { 
    let {coursename, discription, RegisterStudentId} = req.body;
    coursename = coursename.trim().toLowerCase();
    discription = discription.trim().toLowerCase();

    if (coursename !== '' && discription !== '' && RegisterStudentId !== '') {
        await course.courses.create({
            coursename: coursename,
            discription: discription,
            RegisterStudentId: RegisterStudentId
        }).then((result) => {
            res.status(200).json({ msg: `You added student ${result.RegisterStudentId} for this course`, data: result });
        }).catch((err) => {
            res.status(500).json({ err: 'Failed to add course', error: err });
        });
    } else {
        res.status(400).json({ err: 'Please provide all the necessary input for the course' });
    }
}

// Exports ================

module.exports = {addCourse}