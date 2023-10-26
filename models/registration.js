module.exports = (sequelize, Sequelize)=>{
    const Student_Register = sequelize.define("RegisterStudents", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        studentName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
             type: Sequelize.STRING,
             allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }

    })
    return Student_Register;
}