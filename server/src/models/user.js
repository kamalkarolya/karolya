const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
       },
       tokens:[{
           token:{
               type:String,
               required:true
           }
       }]
 
})


 //  GENERATING HASH OF PASSWORD
 userSchema.pre("save", async function (next){
      
    if(this.isModified("Password")){

        this.Password = await bcrypt.hash(this.Password,10);
        this.Cpassword = await bcrypt.hash(this.Cpassword,10);
    
    }
    
     next(); 

 })

 userSchema.methods.generateAuthToken = async function (){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (e) {
        console.log(e);
    }
 }

const User = mongoose.model("User",userSchema);


module.exports=User;