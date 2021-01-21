import React from 'react'
import img1 from './images/14.jpeg';
import img2 from './images/11.jpeg';
import img3 from './images/12.jpeg';
import img4 from './images/13.jpeg';
import img5 from './images/15.jpeg';
import img6 from './images/16.jpg';
import {FaGithub, FaEye}
 from 'react-icons/fa';
const Project = () => {
    const [header] = React.useState
    ({
        mainHeader: "My Projects",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting\
        industry. Lorem Ipsum standard dummy text."
    });
    return (
        <div className="projects" id="projects">
            <div className="container" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
            <div className="projects__header">
            <div className="common">
            <h1 className="mainHeader">{header.mainHeader}</h1> 
            <p className="mainContent">{header.text}</p> 
            </div>
            <div className="commonBorder"></div>

            <div className="project-img" data-aos="zoom-in" data-aos-duration="3000"  data-aos-easing="linear">
            <div className="project-img-box">
               <img className="img1" src={img1} alt="P1" height="250" width="250"/>
               
               <h4>Expense Tracker App</h4>
               <div className="project-icon">
               <FaGithub className="faGit" title="view code"/><FaEye title="live preview"/>
               </div>
               
            </div>
            <div className="project-img-box">
               <img className="img2" src={img2} alt="P2" height="250" width="250"/>
               <h4>Shoe Store</h4>
               <div className="project-icon">
               <FaGithub className="faGit" title="view code"/><FaEye className="faEye" title="live preview"/>
               </div>
            </div>
            <div className="project-img-box">
                <img className="img3" src={img3}alt="P3" height="250" width="250"/>
                <h4>Timer App</h4>
                <div className="project-icon">
               <FaGithub className="faGit" title="view code"/><FaEye className="faEye" title="live preview"/>
               </div>
            </div>
            <div className="project-img-box">
                <img className="img4" src={img4}alt="P4" height="250" width="250"/>
                <h4>React Quize</h4>
                <div className="project-icon">
               <FaGithub className="faGit" title="view code"/><FaEye className="faEye" title="live preview"/>
               </div>
            </div>
            <div className="project-img-box">
                <img className="img5" src={img5} alt="P1" height="250" width="250"/>
                <h4>Covid-19 Tracker App</h4>
                <div className="project-icon">
               <FaGithub className="faGit" title="view code"/><FaEye className="faEye" title="live preview"/>
               </div>
            </div>
            <div className="project-img-box">
                <img className="img6" src={img6} alt="P1" height="250" width="250"/>
                <h4>Animated Portfolio</h4>
                <div className="project-icon">
               <FaGithub className="faGit" title="view code"/><FaEye className="faEye" title="live preview"/>
               </div>
            </div>
            </div>
            
            

           
            </div>
            </div>
            
        </div>
    )
}

export default Project;
