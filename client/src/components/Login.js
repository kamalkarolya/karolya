import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { UserContext } from '../App';
import loginimg from '../images/animlog.svg';

import './Login.css';

const Login = () => {
    const {state, dispatch} =  useContext(UserContext);
    const history = useHistory();
    const [user, setUser]= useState({
        Email:"", Password:""
    });
    const inputVal=(e)=>{
        let name = e.target.name;
        let value= e.target.value;
        setUser({...user, [name]:value});
    }
    const postData= async (e)=>{
       
        e.preventDefault();
        // object destructering
         const { Email , Password }= user;
         const res= await fetch("/login",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
               Email, Password
             })
         });
         const data =await res.json();
         if(res.status==400 || !data){
             window.alert("invalid details");
             console.log("invalid details");
             

         }else{
             window.alert("Successfull ");
             dispatch({type:"USER", payload:true});
            console.log("succesfull");
           history.push('./'); 
        }


    }
    return (
       <>

<div className="container">
        <div className="row">
            <div >
                <div className="cards">
                    <form   method="POST"  className="box">
                        <h1>Login</h1>
                        <p className="text-muted"> Please enter your login and password!</p>
                         <input type="email" name="Email"  value={user.Email} onChange={inputVal} placeholder="Username or Email "  /> 
                         <input type="password" name="Password" value={user.Password} onChange={inputVal} placeholder=" Password" /> 
                         <a className="forgot text-muted" href="#">Forgot password?</a> 
                         <button type="submit" onClick={postData} className="login-btn" >Login</button>
                           
                        <div className="col-md-12">
                            <ul className="social-network social-circle">
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="bi bi-facebook"></i> </a></li>
                                         
                                <li><a href="#" className="icoTwitter" title="Twitter"><i className="bi bi-twitter"></i></a>
                                </li>
                                <li><a href="#" className="icoGoogle" title="Google +"><i className="bi bi-google"></i></a></li>
                                            
                            </ul>
                        </div>
                    </form>
      
                    <img  className="illustrate" src={loginimg} />
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Login
