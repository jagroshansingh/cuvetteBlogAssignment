const express=require('express');
// const bcrypt=require('bcrypt');
const connection=require('../db')
const AuthRouter=express.Router();

AuthRouter.post('/signup',async(req,res)=>{
    const {email,password}=req.body;
    try {
        connection.query(
          'INSERT INTO users (email, password) VALUES (?, ?)',
          [email, password],
          (error, results) => {
            if (error) throw error;
            res.status(201).json({ message: 'User registered successfully' });
          }
        );
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
})

AuthRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body; 
    try {
      connection.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (error, results) => {
          if (error) throw error;
  
          if (results.length > 0) {
            res.send({ message: 'Login successful' });
          } else {
            res.send({ message: 'Invalid credentials' });
          }
        }
      );
    // res.send(email)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports=AuthRouter