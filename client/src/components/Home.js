import React, {useState,useEffect} from  'react';
import { useHistory } from 'react-router';

import './Home.css';
const Home = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});
   const [ show , setShow] = useState(false);
    const userHomeData=async()=>{
        try {
            const res = await fetch('/home',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                 },
                credentials:"include"
            });

             const data = await res.json();
             console.log(data);
              setUserData(data);
              setShow(true);
             if (!res.status===200) {
                 const error = new Error(res.error);
                 throw error;
             }    
        } catch (err) {
            console.log(err);
            history.push('/');
        }
    }
    useEffect(() => {
      userHomeData();
    }, [])
    return (
      <>
       <div className="both" >
           <div className="left" ></div>
           <div className="right" ></div>
           
       </div>
          <div className="text-center mt-5 headline" > 
          <h5 className="homehead" >WELCOME  </h5>

           <h1 className="homehead">  {userData.Fullname} </h1>

           <h6>{ show? 'Happy to see you back': `We're MERN Developer` }</h6>
          </div>
       </>
    )
}

export default Home;
