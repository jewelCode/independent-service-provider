import React from 'react';
import about from '../../resources/about.jpg'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid w-75 mx-auto" src={about} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>About Me</h2>
                    <h4>Name: Jewel Barua</h4>
                    <p>Hello I am Jewel Barua. From my childhood I am Technology Lover. I am always try to learn new innovative things. I am also learning web development from Programming Hero. </p>

                    <p>I want to develop my career as a full stack web developer. Also learning modern web technology. I also cope up with HTML, CSS, bootstrap, Javascript, Debugging, React. I have ability to adapt new and modern web technologies.</p>

                </div>
            </div>
        </div>
    );
};

export default About;