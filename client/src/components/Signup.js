import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import signupsvg from '../images/signup.svg'
import './Signup.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Signup = () => {
    const history = useHistory();
    const [user, setUser]= useState({
        Fullname:"", Email:"", Phone:"" , Work:"", Password:"",Cpassword:""
    });
    const inputVal=(e)=>{
        let name = e.target.name;
        let value= e.target.value;
        setUser({...user, [name]:value});
        // console.log(newUser);
    }
    const postData= async (e)=>{
        e.preventDefault();

        // object destructering
         const {Fullname, Email, Phone , Work, Password,Cpassword  } = user;
         const res= await fetch("/register",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                Fullname, Email, Phone , Work, Password,Cpassword
             })
         });
         const data = await res.json();
         console.log(data);
         if(res.status === 422 || !data){ 
             
              toast.error('invalid details', 
              {position: toast.POSITION.TOP_CENTER});
             console.log("invalid details");
           

         }else{
            toast.success('login Successfull', 
            {position: toast.POSITION.TOP_CENTER});
            console.log("succesfull");
           history.push('./signin'); 
        }


    }

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
                    <form   method="POST"  className="box">
                        <h1>Sign Up</h1>
                        {/* <p className="text-muted"> Please enter your login and password!</p> */}
                         <input type="text" name="Fullname"  onChange={inputVal} value={user.Fullname} placeholder="Your Full Name" />
                         <input type="email" name="Email" onChange={inputVal} value={user.Email} placeholder="Your Email" />
                         <input type="number" name="Phone" onChange={inputVal} value={user.Phone} placeholder="Your Contact Number" />
                         <input type="text" name="Work" onChange={inputVal} value={user.Work} placeholder="Your Work" />
                           <input type="password" name="Password" onChange={inputVal} value={user.Password} placeholder="Password" /> 
                         <input type="password" name="Cpassword" onChange={inputVal} value={user.Cpassword} placeholder="Confirm Password" /> 
                        
                         <button type="submit" className="login-btn" onClick={postData} >Login</button>
                    </form>
                    <img src={signupsvg} className="illustrate" />
                    
                </div>
            </div>
        </div>
    </div>
       </>
    )
}

export default Signup
