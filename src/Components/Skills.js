import React from 'react'
import logo1 from './Logo/linux.png';
import logo2 from './Logo/kuber.png';
import logo3 from './Logo/docker.png';
import logo4 from './Logo/html.png';
import logo5 from './Logo/css.png';
import logo6 from './Logo/js.png';
import logo7 from './Logo/react.png';
import logo8 from './Logo/redux.png';
import logo9 from './Logo/typescript.png';

const Skills = () => {
    const [header] = React.useState
    ({
        mainHeader: "I am Good in!",
        subHeading: "Skills",
        
    });
    
    return (
        <div className="skills" id="skills">
        <div className="container">
            <div className="skills__header">                             
                <div className="common" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
                  <h3 className="heading">{header.subHeading}</h3>
                  <h1 className="mainHeader">{header.mainHeader}</h1> 
                  
                  <div className="commonBorder"></div>
                </div>
                 
                </div> 
                <div className="logo-box" data-aos="zoom-in" data-aos-duration="3000"  data-aos-easing="linear">
                <div className="logo-img">
                    <img className="logo1" src={logo1} alt="" height="100" width="100"/>
                    <h4>Linux</h4>
                </div>
                <div className="logo-img">
                    <img className="logo2" src={logo2} alt="" height="100" width="100" />
                    <h4>Kubernetes</h4>
                </div>
                <div className="logo-img">
                    <img className="logo3" src={logo3} alt="" height="100" width="100"/>
                    <h4>Docker</h4>
                </div>
                <div className="logo-img">
                    <img className="logo4" src={logo4} alt="" height="100" width="100" />
                    <h4>HTML</h4>
                </div>
                <div className="logo-img">
                    <img className="logo5" src={logo5} alt="" height="100" width="100" />
                    <h4>CSS</h4>
                </div>
                <div className="logo-img">
                    <img className="logo6" src={logo6} alt="" height="100" width="100" />
                    <h4>JavaScript</h4>
                </div>
                <div className="logo-img">
                    <img className="logo7" src={logo7} alt="" height="100" width="100" />
                    <h4>React</h4>
                </div>
                <div className="logo-img">
                    <img className="logo8" src={logo8} alt="" height="100" width="100" />
                    <h4>React Redux</h4>
                </div>
                <div className="logo-img">
                    <img className="logo9" src={logo9} alt="" height="100" width="100" />
                    <h4>React TypeScript</h4>
                </div>

                </div>
               
                
            </div>
        </div>
        
   
    )
}

export default Skills
