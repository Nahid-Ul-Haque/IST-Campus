import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/ecrc-1440x400.jpg'
import img2 from '../../Images/joinInPcIST-1440x400.jpg'
import img3 from '../../Images/Banner-7-1440x400.jpg'
import './ClubDetails.css'

const ClubDetails = () => {
    return (
        <div className='club-section'>
            <h2>Student's Clubs</h2>
            <br />
            <hr />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-50"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-50"
                        src={img3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-50"
                        src={img2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <p>Several clubs are active on the campus, initiated by enthusiastic students with a passion in their related field. Students are always welcome to join these clubs and enhance their theoretical and practical knowledge, along with sharpening their extracurricular skills.</p>
            <ul>
                <li>Electronics, Communication and Robotics Club of IST (ECRC)</li>
                <li>Business Communication Club (BCC)</li>
                <li>Programming Club of IST (pcIST)</li>
            </ul>
        </div>
    );
};

export default ClubDetails;