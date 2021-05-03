const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../models/user');
const middleware=(req,res,next)=>{
    console.log("hello fefefefe");
    next()
}

router.get('/',(req,res)=>{
    res.send('Heloo world');
})
router.get('/about',  middleware,(req,res)=>{
    res.send('About Page');
})
router.get('/contact',(req,res)=>{
    res.send('Contact Page');
})
router.get('/register',(req,res)=>{
    res.send("Register page")
})
router.post('/register',async (req,res)=>{
  
    const { Fullname , Email , Phone , Work , Password  , Cpassword } = req.body;
    if( !Fullname || !Email || !Phone ||  !Password  || !Cpassword  ){
        return res.status(422).json({error:"Please Fill The Required Details"});
    }
  try {

    const UserExist = await User.findOne({Email });
    if(UserExist){
        return res.status(422).json({error:"Already have a Account "});
    }
    const user = new User({ Fullname , Email , Phone , Work  , Password , Cpassword });
    if(Password===Cpassword){
         await user.save();
        res.status(201).json({message:"User Registered Successfully"}); 
          console.log(req.body);
    }else{
        res.status(400).json({error:"password are not matching"});
    } 
   
    
   
  } catch (err) {
      console.log(err);
      res.status(404).send(err); 
  }
   

    // res.send('Register Page');
})
router.get('/login' ,  (req,res)=>{
    // const email = req.body.Email;
    // const password = req.body.Password;
    // console.log(email);
    console.log("hiii");
    res.send("vssdvs");
    res.cookie("login","thpap");
})
router.post('/login' , async (req,res)=>{
    const email = req.body.Email;
    const password = req.body.Password;
    console.log(email);
    try {
        if( !email ||  !password   ){
            return res.status(422).json({error:"Please Fill The Required Details"});
        }
        const UserExist = await User.findOne({ Email: email }); 
        console.log(UserExist);
        const isMatch = await bcrypt.compare(password, UserExist.Password);
        res.cookie("jwt",{
            expire:new Date(Date.now()+3000000),
            httpOnly:true
        })
        if(isMatch){
            res.status(200).json({message:"login successfully"});
            const token = await UserExist.generateAuthToken();
            console.log(token);
        }else{
            res.status(404).json({error:"invalid details"})
        }
        // if (UserExist.Password===password) {
        //     res.status(200).json({message:"login successfully"});
            
        // }else{
        //     res.status(404).json({error:"invalid details"})
        // }
    } catch (e) {
        res.status(500).json({error:"invalid details"})
    }
})

module.exports = router;