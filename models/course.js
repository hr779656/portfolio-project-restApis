module.exports = (sequelize, Sequelize)=>{
    const courses = sequelize.define("courses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        coursename: {
            type: Sequelize.STRING,
            allowNull: false
        },
        discription: {
             type: Sequelize.STRING,
             allowNull: false
        }

    })
    return courses;
}