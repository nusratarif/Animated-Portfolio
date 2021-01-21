import React from 'react'
import img from './images/contact me.png';
const About = () => {
    const [header] = React.useState({
        subHeading: "About Me",
        text: "Lorem Ipsum is simply dummy text of the printing and \
        typesetting industry. Lorem Ipsum standard dummy text."
    })
    const [state] = React.useState([
        { id:1, title: "Name:", text: "Nusrat Jahan"},
        { id:2, title: "Email:", text: "dummy12@gmail.com"},
        { id:3, title: "Phone:", text: "+1 243 485 987"},
        { id:4, title: "Linkedin:", text: "Nusrat_123"}
    ])
    return (
        <div className="about" id="about">
            <div className="container">
              <div className="common"data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
                 <h1 className="mainHeader">{header.subHeading}</h1> 
                 <p className="mainContent">{header.text}</p>                            
                <div className="commonBorder"></div>
              </div> 
              <div className="row h-123 alignCenter" >
                  <div className="col-6">
                      <div className="about__img"  data-aos="flip-left"  data-aos-duration="3000"  data-aos-easing="linear">
                      <img src={img} alt="My Pic" height="280" />
                      </div>
                  </div>
                  <div className="col-6">
                      <div className="about__info"data-aos="flip-right"  data-aos-duration="3000"  data-aos-easing="linear">
                          <h1>Hi There!</h1>
                          <div className="about__info-p1">
                              Nam molestie risus odio, quis euismod sapien pretium in. 
                              Cras tincidunt gravida luctus. Maecenas posuere arcu sed 
                              pulvinar maximus. Aenean aliquam consectetur facilisis.
                          </div>
                          <div className="about__info-p2">
                              Quisque felis metus, molestie gravida eros in, ornare 
                              accumsan  mi. Integer ac semper sem. Integer lobortis,
                              orci in sodales venenatis, est ligula congue lorem.
                          </div>
                          <div className="info__contacts">
                              <div className="row">
                                  {state.map((info) =>(
                                    <div className="col-6">
                                        <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                  
                                  ))}
                                  
                                  
                              </div>
        
                          </div>
                      </div>

                  </div>
             </div>          
            </div>   
        </div>
    )
}

export default About
