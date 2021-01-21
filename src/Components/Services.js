import React from 'react'
import {FaGithub,FaCircleNotch, FaApple}
 from 'react-icons/fa';
const Services = () => {
    const [header] = React.useState
    ({
        mainHeader: "SERVICES",
        subHeading: "My Services",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Lorem Ipsum standard dummy text."
    });
    const [state] = React.useState([
      {
        id: 1,
        icon: <FaGithub />,
        heading: "Web Development",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Simply dummy."
      },
      
      {
        id: 2,
        icon: <FaCircleNotch />,
        heading: "Web Design",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Simply dummy."
      },
      {
        id: 3,
        icon: <FaApple />,
        heading: "App Development",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Simply dummy."
      },
      
     ] )
    return (
        <div className="services" id="services">
            <div className="container"data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
                <div className="services__header">                             
                    <div className="common">
                      <h3 className="heading">{header.mainHeader}</h3>
                      <h1 className="mainHeader">{header.subHeading}</h1> 
                      <p className="mainContent">{header.text}</p>                       
                      
                      <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                      {state.map(info => (
                        <div className="col-4 bgMain">
                            <div className="services__box" data-aos="zoom-in" data-aos-duration="3000"  data-aos-easing="linear">
                              <div className="commonIcons">{info.icon}</div>
                                <div className="services__box-header">{info.heading}</div>
                                <div className="services__box-p">{info.text}</div>
                                
                            </div>
                        </div>                                
                       ))} 
                    </div> 
                    
                </div>
            </div>
            
        </div>
    );
};

export default Services;
