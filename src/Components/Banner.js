import React from 'react';
import img from './images/Its me.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import {FaFacebookF,
       FaTwitter,
       FaPinterest,
       FaInstagram,
       FaPlay} 
    from 'react-icons/fa';
    AOS.init();  
const Banner = () => {
    
    
    
    return (
        <header className="header">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                   <div className="header__content">
                       <div className="header__section">
                       <ul className="header__ul" data-aos="zoom-in-Down" data-aos-duration="3000"  data-aos-easing="linear">
                           <li><FaFacebookF /></li>
                           <li><FaTwitter /></li>
                           <li><FaPinterest /></li>
                           <li><FaInstagram /></li>
                       </ul>
                       <div className="type-heading">
                       <Typewriter 
                       onInit={(typewriter) => {
                           typewriter.typeString("I am Nusrat Arif").start();
                       }}/>
                       </div>
                       <div className="type-p">
                       <Typewriter 
                       onInit={(typewriter) => {
                           typewriter.typeString("I am web developer and also a Homeopathic Doctor").start();
                       }}/>
                       </div>
                       
                       
                      
                          <div className="header__buttons">
                              <a href="" className="btn btn-outline">
                                  My Portfolio
                              </a> 
                              &nbsp;&nbsp;&nbsp;
                              <a href="" className="btn btn-smart">
                                  <FaPlay className="play"/>
                              </a>

                          </div>
                       </div>
                      
                   </div>
                   </div>
                   <div className="col-6">
                       <div className="banner__img" data-aos="fade-left" data-aos-duration="3000"  data-aos-easing="linear">
                       <img src={img} alt="My Pic" height="300" />
                       </div>
                       
                   </div>
               </div>
           </div> 


        </header>
    )
}

export default Banner;
