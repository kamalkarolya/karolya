import React from 'react'
import './Login.css';
const Login = () => {
    return (
       <>

<div class="container">
        <div class="row">
            <div >
                <div class="cards">
                    <form  action="/login"  method="POST"  class="box">
                        <h1>Login</h1>
                        <p class="text-muted"> Please enter your login and password!</p>
                         <input type="email" name="Email"  placeholder="Username or Email "  /> 
                         <input type="password" name="Password" placeholder=" Password" /> 
                         <a class="forgot text-muted" href="#">Forgot password?</a> 
                         <button type="submit" class="login-btn" >Login</button>
                           
                        <div class="col-md-12">
                            <ul class="social-network social-circle">
                                <li><a href="#" class="icoFacebook" title="Facebook"><i class="bi bi-facebook"></i> </a></li>
                                         
                                <li><a href="#" class="icoTwitter" title="Twitter"><i class="bi bi-twitter"></i></a>
                                </li>
                                <li><a href="#" class="icoGoogle" title="Google +"><i class="bi bi-google"></i></a></li>
                                            
                            </ul>
                        </div>
                    </form>
      
                    <img  className="illustrate" src=" https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?size=338&ext=jpg&ga=GA1.1.1991903213.1616716800"  />
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Login
