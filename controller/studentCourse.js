// import Statement ==================

const course_sch = require('../models')

// Check Student add In which course ===========

const checked_st_cor = async (req, res) => {
    const studentId = req.params.studentID; 

    try {
        const courses = await course_sch.courses.findAll({
            where: { RegisterStudentId: studentId }
        });

        if (courses.length > 0) {
            res.status(200).json({ msg: `Courses for Student ${studentId}`, data: courses });
        } else {
            res.status(404).json({ msg: `No courses found for Student ${studentId}` });
        }
    } catch (err) {
        res.status(500).json({ err: 'Failed to fetch courses', error: err });
    }
}

// Exports ==========

module.exports = {checked_st_cor}