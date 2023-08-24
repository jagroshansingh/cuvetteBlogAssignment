const express=require('express');
const AuthRouter = require('./Routes/AuthRoutes');
const connection = require('./db');
const cors=require('cors')
const app=express()
require('dotenv').config();

app.use(cors())
app.use(express.json())

app.use('/auth',AuthRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log('Database is connected successfully')
    } catch (error) {
        console.log(err)
    }
    console.log(`Server is running at port ${process.env.PORT}`)
})