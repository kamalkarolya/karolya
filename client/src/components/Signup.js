import React from 'react'
import './Signup.css';
const Signup = () => {
    return (
       <>
       {/* <div className="text-center" >
           <h1>Sign Up</h1>
           <div  className="d-flex justify-content-center "  >
               <input type="text"   />
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

           </div>
       </div> */}
       <div className="container">
        <div className="row">
            <div>
                <div className="cards">
                    <form  action="/login"  method="POST"  className="box">
                        <h1>Sign Up</h1>
                        {/* <p className="text-muted"> Please enter your login and password!</p> */}
                         <input type="text" name="Fullname" placeholder="Your Full Name" />
                         <input type="email" name="Email" placeholder="Your Email" />
                         <input type="number" name="Phone" placeholder="Your Contact Number" />
                         <input type="text" name="Work" placeholder="Your Work" />
                           <input type="password" name="Password" placeholder="Password" /> 
                         <input type="password" name="Cpassword" placeholder="Confirm Password" /> 
                        
                         <button type="submit" className="login-btn" >Login</button>
                    </form>
                    <img src="https://image.freepik.com/free-vector/creativity-concept-illustration_114360-1083.jpg" className="illustrate" />
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Signup
