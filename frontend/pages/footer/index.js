import "./styles3.css"
import React from 'react';
import { SocialIcon } from 'react-social-icons';



import Link from 'next/link'


const footer = () => {

    return (
        <div className="footer-distributed">
         <div class="footer-left">
          
				<h3>About<span>Waulto</span></h3>
 
				<p class="footer-links">
					<div>
                <Link href="/">
						Home</Link></div>
					<div><Link href="/blogs">
                   Blogs</Link></div>
						
				</p>
 
				{/* <p class="footer-company-name"> Waulto-2020</p> */}
			</div>
 
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>Remote Work</span>
						Chennai,INDIA</p>
				</div>
 
				<div>
					<i class="fa fa-phone"></i>
                    <p>+91 9447362813</p>
                   
				</div>
				
			</div>
            <div className="footer-right mail">
            <div className="footer-text">
                Contact Us:
            </div>
				{/* <p class="footer-company-about">
					<span>About the company</span>
					We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p> */}
			<div className="footer-icons">
					<SocialIcon url="https://www.youtube.com/almost-everything" fgColor="white" bgColor="black" className="icon"/>
                    <SocialIcon url="https://twitter.com/Waulto1" fgColor="white" bgColor="black" className="icon"/>
                    <SocialIcon url="https://www.linkedin.com/company/waulto/" bgColor="black" fgColor="white" className="icon"/>
                	<a href="mailto:waulto.ed@gmail.com"><SocialIcon network="mailto" fgColor="white" bgColor="black" className="icon"/></a>
				
			</div>
				
            </div>
                
 </div>
 
  
    );

};

export default footer;