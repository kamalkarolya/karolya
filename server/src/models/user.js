const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

       Fullname:{
           type:String,
           required:true,
       },
       Email:{
           type:String,
           required:true,
       },
       Phone:{
           type:Number,
           required:true,
       },
       Work:{
           type:String
         
       },
       Password:{
           type:String,
           required:true
       },
       Cpassword:{
           type:String,
           required:true,
       }
 
})

const User = mongoose.model("User",userSchema);


module.exports=User;