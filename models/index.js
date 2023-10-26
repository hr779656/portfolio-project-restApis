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

// Export Statement ========
module.exports = db;