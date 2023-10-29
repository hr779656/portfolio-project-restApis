// import Statements ============
const config = require('../Config/Config')
const Sequelize = require('sequelize')

// Database Connectivity ========
const sequelize = new Sequelize(config.DATABASE, config.USER, config.PASSWORD, {
    dialect: config.DATABASE, 
    host : config.HOST
});

// Veribale for database Methods and Schemas ================
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Student_Register = require('./registration')(sequelize, Sequelize);
db.courses = require('./course')(sequelize, Sequelize);

// Associations between Student and Course
db.Student_Register.hasMany(db.courses)
db.courses.belongsTo(db.Student_Register)

// Export Statement ========
module.exports = db;