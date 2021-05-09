import React, {useState,useEffect} from  'react';
import { useHistory } from 'react-router';

import './Example.css';


// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };
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
        <div  className="glitch" >
            <div id="ui" >

            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
            <div className="text"> Welcome  {userData.Fullname}  <p className="chota" > { show? 'Happy to see you back': `We're MERN Developer` } </p> </div>
           
          
            </div>
        </div>

       {/* <div className="both" >
           <div className="left" ></div>
           <div className="right" ></div>
           
       </div>
          <div className="text-center  headline" > 
          <h5 className="homehead" >WELCOME  </h5>
          <h1>
  <a href="" class="typewrite" data-period="2000" data-type='[ "Welcome.", "Hello,Happy to see you back", "I Love Design.", "I Love to Develop." ]'>
    <span class="wrap"></span>
  </a>
</h1>

           <h1 className="homehead">  {userData.Fullname} </h1>

           <h6>{ show? 'Happy to see you back': `We're MERN Developer` }</h6>
          </div> */}
       </>
    )
}

export default Home;
