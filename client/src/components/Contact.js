import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <div className="mt-5 mb-5" >
                <div className="upper-row" >

                    <div className="phone" >
                        <i class="bi bi-phone pe-2"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>95521677036</p>
                        </div>
                    </div>



                    <div className="phone" >
                        <i class="bi bi-envelope pe-3"></i>
                        <div>
                            <h3>Email</h3>
                            <p>kamal@karolya.com</p>
                        </div>
                    </div>



                    <div className="phone" >
                        <i class="bi bi-geo-alt pe-2 "></i>
                        <div>
                            <h3>Address</h3>
                            <p>New Delhi,India</p>
                        </div>
                    </div>



                </div>
                <div className=" lower-row mt-5 " >
                    <div className=" p-5 dibba" >
                    <h2 className="text-start" >Get in touch</h2>
                    <form>
                        <div >
                            <input className=" col-md-3 m-2 p-1 " type="text" name="Name" placeholder="Your Name" />
                            <input className="col-md-3 m-2 p-1" type="email" name="Email" placeholder="Your Email" />
                            <input className="col-md-3 m-2 p-1" type="number" name="Phone" placeholder="Your Number" />

                        </div>
                        {/* <input className="col-md-6 m-2 p-1" type="text"  name="Message" placeholder="Message" /> */}
                        <textarea className=" hh m-2 p-1" cols="60" rows="10" placeholder="Your Message" />
                       <div>
                           <button type="submit" className="btn btn-success m-2 " > Send </button>
                       </div>

                    </form>

                </div>
                </div>
            </div>
        </>
    )
}

export default Contact
