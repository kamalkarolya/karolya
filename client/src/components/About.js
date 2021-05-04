import React from 'react';
import './About.css';

const About = () => {
    return (
      <>
      <div className="container" >
          <form>
              <div className="row" >
                 <div className="col-md-4" >
                   <img width="90" height="120" src="https://cdn.vox-cdn.com/thumbor/otYdWOBFSBXjx-EofnGWGjUOUdA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21883562/acastro_200915_1777_hacking_0001.jpg" />

                 </div>
                 <div className="col-md-6" >
                    <div className="top-info" >
                        <h5>Kamal Karolya</h5>
                        <h6>Web Developer</h6>
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
                                      <p>535d6s4f4f66436464s</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Name</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Kamal Karolya</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Email</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Kamal@karolya.com</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Phone</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>4565859544</p>
                                  </div>
                              </div>
                              <div className="row mt-3" >
                                  <div className="col-md-6" >
                                      <label>Profession</label>
                                  </div>
                                  <div className="col-md-6" >
                                      <p>Web Developer</p>
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
