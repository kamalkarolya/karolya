import React, {useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Contact.css';
const Contact = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});

    const inputval = (e)=>{
        const name= e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]:value});
    }
    const sendMess=async(e)=>{
                    e.preventDefault();
                    const {Fullname,Email,Phone,Message}= userData;
                  const res = await  fetch('/contactme',{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({ Fullname,Email,Phone,Message

                        })
                    });
                    const data = await res.json();
                    if(!data){
                        console.log("messege not send");
                    }else{
                        alert('Message sent');
                        setUserData({...userData, Message:""})
                    }


    }
    const userContactData=async()=>{
        try {
            const res = await fetch('/contactme',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                 },
                credentials:"include"
            });

             const data = await res.json();
             console.log(data);
              setUserData({...data, Fullname:data.Fullname, Email:data.Email,Phone:data.Phone});
             if (!res.status===200) {
                 const error = new Error(res.error);
                 throw error;
             }    
        } catch (err) {
            console.log(err);
            history.push('/signin');
        }
    }
    useEffect(() => {
      userContactData();
    }, [])
    return (
        <>
            <div className="mt-5 mb-5" >
                <div className="upper-row" >

                    <div className="phone" >
                        <i className="bi bi-phone pe-2"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>95521677036</p>
                        </div>
                    </div>



                    <div className="phone" >
                        <i className="bi bi-envelope pe-3"></i>
                        <div>
                            <h3>Email</h3>
                            <p>kamal@karolya.com</p>
                        </div>
                    </div>



                    <div className="phone" >
                        <i className="bi bi-geo-alt pe-2 "></i>
                        <div>
                            <h3>Address</h3>
                            <p>New Delhi,India</p>
                        </div>
                    </div>



                </div>
                <div className=" lower-row mt-5 " >
                    <div className=" p-5 dibba" >
                    <h2 className="text-start" >Get in touch</h2>
                    <form method="POST" >
                        <div >
                            <input className=" col-md-3 m-1 p-1 " type="text" name="Fullname"  onChange={inputval}  value={userData.Fullname} placeholder="Your Name" />
                            <input className="col-md-4 m-1 p-1" type="email" name="Email"  onChange={inputval}  value={userData.Email} placeholder="Your Email" />
                            <input className="col-md-4 m-1 p-1" type="number" name="Phone"  onChange={inputval}  value={userData.Phone} placeholder="Your Number" />

                        </div>
                        {/* <input className="col-md-6 m-2 p-1" type="text"  name="Message" placeholder="Message" /> */}
                        <textarea className=" hh m-2 p-1" cols="60" rows="10" name="Message" onChange={inputval}  value={userData.Message} placeholder="Your Message" />
                       <div>
                           <button type="submit" onClick={sendMess} className="btn btn-success m-2 " > Send </button>
                       </div>

                    </form>

                </div>
                </div>
            </div> 
        </>
    )
}

export default Contact
