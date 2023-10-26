//  Import Statements =======
const express = require('express')
const app =  express()
require('dotenv').config()
const db = require('./models')
const port = process.env.PORT
const bodyParser = require('body-parser');
const All_routes = require('./routes/Allroute')

// Middlewares ========

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use("/una", All_routes)

// Server ===== 

db.sequelize.sync().then((result)=>[
    app.listen(port, ()=>{
        console.log(`Database Connected \nServer Run this Port ${port}`)
    })
]).catch((err)=>{
    console.log(err)
})




