import React,{useEffect , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    const {state, dispatch} =  useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
             },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"USER", payload:false})
             history.push('/signin', {replace:true});

             if(!res.status===200){
                 throw new Error(res.error);
             }
             
        }).catch((err)=>{
            console.log(err);
        })
        
    }, [])
    return (
        <>
        <h1>Logout ka page</h1>  
        </>
    )
}

export default Logout
