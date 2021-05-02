const express = require('express');
const User = require('../models/user');
const router = express.Router();

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
    const user = new User({ Fullname , Email , Phone , Work  , Password  , Cpassword  });
     await user.save();
    res.status(201).json({message:"User Registered Successfully"});
       console.log(req.body);
   
  } catch (err) {
      console.log(err);
      res.status(404).send(err); 
  }
   

    // res.send('Register Page');
})

module.exports = router;