const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('../models/user');
const authenticate = require('../middleware/authenticate');

router.get('/home', authenticate , (req,res)=>{
    console.log("Index Filee");
    res.send(req.rootUser);
})


router.get('/about', authenticate,(req,res)=>{
    console.log("heloo aboutme");
    res.send(req.rootUser);
    // res.send('About Page');
})


router.get('/contactme', authenticate, (req,res)=>{
    // res.send('Contact Page');
    console.log("Contact Page ");

    res.send(req.rootUser);
})
router.post('/contactme' , authenticate, async (req,res)=>{
    const {Fullname,Email,Phone,Message} = req.body;

    try {
        if(!Fullname || !Email  || !Phone || !Message){
            console.log("Error in contact form");
           return res.status(400).json({message:"Error CONtact"})
        }
        const userContact = await User.findOne({_id: req.userId});
        if(userContact){
            const userMess = await userContact.addMessage(Fullname,Email,Phone,Message);
            await userContact.save();
            res.status(201).json({message:"User message succesfully saved"});
        }
    } catch (err) {
        console.log(err);
    }
     
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
    }else if(Password!==Cpassword){
        res.status(422).json({error:"password are not matching"});

       
    }else{
        const user = new User({ Fullname , Email , Phone , Work  , Password , Cpassword });
        await user.save();
        res.status(201).json({message:"User Registered Successfully"}); 
        console.log(req.body);
    } 
   
    
   
  } catch (err) {
      console.log(err);
      res.status(422).send(err); 
  }
   

    // res.send('Register Page');
})


router.get('/login' ,  (req,res)=>{
    // const email = req.body.Email;
    // const password = req.body.Password;
    // console.log(email);
    console.log("hiii");
    res.send("vssdvs");
    // res.cookie("login","thpap");
})
router.get('/logout' ,  (req,res)=>{
   
    console.log("Logout Successfully");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).json({message:"Logout su"})
    
  
})

router.post('/login' , async (req,res)=>{
    const { Email , Password} = req.body;
    console.log(Email);
    try {
        if( !Email ||  !Password   ){
            return res.status(400).json({error:"Please Fill The Required Details"});
        }
         const UserLogin = await User.findOne({ Email: Email }); 
          if(UserLogin){
              const isMatch = await bcrypt.compare(Password, UserLogin.Password);
            const token = await UserLogin.generateAuthToken();
            res.cookie("jwtoken", token,{
                expires  :new Date(Date.now()+30000000),
                httpOnly:true
            })
            console.log(token);
            console.log(UserLogin);
            if(!isMatch){
                res.status(400).json({error:"invalid details"});
                
            }else{
                res.json({message:"login successfully"});
            }

          }else{
            return res.status(400).json({error:"Invalid details"});
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