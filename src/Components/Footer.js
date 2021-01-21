import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    } 
 from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer" id="contact">
        <div className="container" data-aos="zoom-in-up" data-aos-duration="3000"  data-aos-easing="linear">
            <div className="contactSection">

                    <div className="row justifyCenter">
                        <div className="col-6">
                        <div className="contactSection-heading">
                    <h1>You Find Me at!</h1>
                    </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Vivamus tempus ex a diam aliquam ornare. Donec feugiat,
                         urna ut finibus faucibus, sapien ligula sodales magna,
                         vel imperdiet purus dolor eget tellus</p>


.
                         <ul className="contactCircle">
                             
                                 <li><FaFacebookF /></li>
                                 <li><FaTwitter /></li>
                                 <li><FaPinterest /></li>
                                 <li><FaInstagram /></li>
                             </ul>
                         </div>
                    </div>
                </div>
            </div>   
    </div>
  )
}

    


export default Footer
