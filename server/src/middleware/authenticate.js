const jwt = require('jsonwebtoken');
const User = require('../models/user');



const authenticate = async (req,res,next)=>{
   try {
        const token = req.cookies.jwtoken;
        console.log(`the cookie is ${token}`);
    // console.log(`the cookie is ${req.cookies.jwtoken}`);

    // console.log("HIIII I M THERE")
        const verifyToken =  jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id});


        if (!rootUser) { throw new Error('User Not Found') }
        req.token=token;
        req.rootUser= rootUser;
        req.userId = rootUser._id; 
       next();
   } catch (err) {
       console.log(`the errpr isw ${err}`);
       
       res.status(401).send('Unauthoried token');
   }

   
}
module.exports = authenticate;



// const auth = async (req,res,next)=>{
//     try {
//         const token = req.cookies.jwt;
//         const verify = jwt.verify(token, process.env.SECRET_KEY );
//         console.log(verify);
//         const User = await Register.findOne({_id:verify._id});
//         console.log(User);

//         req.token = token;
//         req.User = User;
//         next();
//     } catch (e) {
//         res.status(401).render('login');
        
//     }

    
// }