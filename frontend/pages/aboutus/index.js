import "./styles2.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const aboutus = () => {

    return (
    <div className="outer">

        <div className="wrapper2">
            <br></br>
           <h2 className="h2" style={{fontWeight:"bolder"}}> <center>ABOUT THE DEVELOPERS</center> </h2> 
           <div className="content">
           {/* <center><img src="/waulto.jpg" alt="devlogo" width="200" height="90" /></center> */}
               <h3 style={{fontWeight:"bold"}}>
               Talk with us! We don't just build sites, we also build long-term relationship.<br/>Collaborate with us today!
               </h3>
            </div>
            </div>
            <div className = "crd">
                 <div class="row">
                                 <div class="column">
                                    <div class="card">
                                      <h3>Babu Aravind</h3>
                                        <p>Developer</p>
                                        <div id="icon">
                                                <SocialIcon url="https://twitter.com/aravindguru33" /> 
                                                .
                                                <SocialIcon url="https://www.linkedin.com/in/babuaravind-gururaj-746a9415a/"/>
                                                .
                                                <SocialIcon url="https://www.instagram.com/aravind.33"/>
                                        </div>
                                     </div>
                                </div>

                        <div class="column">
                            <div class="card">
                            <h3>Kashyab</h3>
                            <p>Co-Founder</p>
                            <div id="icon">
                            <SocialIcon url="https://twitter.com/kashyab_19" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com/in/kashyab-m-38a440126/"/>
                            .
                            <SocialIcon url="https://www.instagram.com/kashyab_19"/>
                            </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div class="card">
                            <h3>Sanjay</h3>
                            <p>Co-Founder</p>
                            <div id="icon">
                            <SocialIcon url="https://twitter.com/sanjay10898" /> 
                            .
                            <SocialIcon url="http://linkedin.com/in/sanjay-kumar-b2b43a182"/>
                            .
                            <SocialIcon url="https://www.instagram.com/sanjaykumar10898/"/>
                            </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div class="card">
                            <h3>Saran Raj</h3>
                            <p>Co-Founder</p>

                            <div id="icon">
                            <SocialIcon url="http://twitter.com/s_saran_raj" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com/in/saran-raj-70a030119"/>
                            .
                            <SocialIcon url="https://www.instagram.com/saranraj_sridhar/"/>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                            <h3>Praveen</h3>
                            <p>Product Manager</p>
                            <div id="icon">
                            <SocialIcon url="https://twitter.com/Praveen00511731" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com/in/praveen-kumar-r-43393815b"/>
                            .
                            <SocialIcon url="https://www.instagram.com/praveen_spear"/>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div id="waultologo">
                <center>Contact Us At</center>
                <div className="waulto-contacts">
                <SocialIcon url="https://www.linkedin.com/company/waulto" fgColor="white" bgColor="black" className="icon"/>
                <SocialIcon url="https://twitter.com/Waulto1" fgColor="white" bgColor="black" className="icon"/>
                <a href="mailto:waulto.ed@gmail.com"><SocialIcon network="mailto" fgColor="white" bgColor="black" className="icon"/></a>
                </div>
            </div>

            
          
                                    
</div> 
    );

};

export default aboutus;