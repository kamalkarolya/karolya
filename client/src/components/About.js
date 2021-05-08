import React,{useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import './About.css';

const About = () => {
    const history = useHistory();
     const [userData, setUserData] = useState({});
    const callAboutPage=async()=>{
        try {
            const res = await fetch('/about',{
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
      callAboutPage();

    
    }, []);
    return (
      <>
      <div className="container" >
          <form method="GET" >
              <div className="row" >
                 <div className="col-md-4" >
                   <img width="90" height="120" src="https://cdn.vox-cdn.com/thumbor/otYdWOBFSBXjx-EofnGWGjUOUdA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21883562/acastro_200915_1777_hacking_0001.jpg" />

                 </div>
                 <div className="col-md-6" >
                    <div className="top-info" >
                        <h5>{userData.Fullname}  </h5>
                        <h6>{userData.Work}</h6>
                        <p  >Ranking  <span>1/10</span> </p>
                        <ul className="nav nav-tabs" role="tablist" >
                            <li className="nav-item" >
                                <a className="nav-link active" id="home-tab" href="#home"  data-toggle="tab" role="tab" aria-controls="home"  aria-selected="true" >About </a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link active" id="timeline-tab" href="#timeline" data-toggle="tab" role="tab" aria-controls="timeline"  aria-selected="true">Timeline </a>
                            </li>

                        </ul>
                    </div>
                 </div>
                 <div className="col-md-2" >
                     <input type="submit" name="editBtn" value="Edit Profile" />
                 </div> 
              </div>

              <div className="row" >
                  {/* Rigth side  */}
                  <div className="col-md-4" >
                      <div className="info-link" >
                          <p>
                              Work Link
                          </p>
                          <a href="#" target="_blank" >Instagram</a>
                          <a href="#" target="_blank" >Facebook</a>
                          <a href="#" target="_blank" >Youtube</a>
                          <a href="#" target="_blank" >Instagram</a>
                      </div>

                  </div>
                  <div className="col-md-4 pl-5 " >
                      <div id="tab-content" >
                          <div className="tab-pane info show fade active"  id="home"  role="tabpanel" aria-labelledby="home-tab" >
                              <div className="row" >
                                  <div className="col-md-6" >
                                      <label>User Id</label>

                                  </div>
                                  <div className="col-md-6" >
                                      <p>{userData._id}</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Name</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p className="homehead" >{userData.Fullname}</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Email</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>{userData.Email}</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Phone</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>{userData.Phone}</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Profession</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p className="homehead" >{userData.Work}</p>
                                  </div>
                              </div>
                          </div>
                          <div className=" tab-pane  fade info " id="timeline"  role="tabpanel" aria-labelledby="timeline-tab" >

                          <div className="row" >
                                  <div className="col-md-6" >
                                      <label>Expert</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Web Developer</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Skills</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Web Developer</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Hobby</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Web Developer</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Qualification</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Web Developer</p>
                                  </div>
                              </div>


                          </div>



                      </div>


                  </div>

              </div>
          </form>
      </div>
      </>
    )
}

export default About
