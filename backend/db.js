const mysql=require('mysql2')
require('dotenv').config()

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.SQLPASSWORD,
    database:'cuvetteblogassignment'
})

module.exports=connection;