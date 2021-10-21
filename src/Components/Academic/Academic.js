import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Academic.css'
import img1 from '../../Images/Building-1440x400.jpg'
import img2 from '../../Images/Banner-7-1440x400.jpg'
import img3 from '../../Images/Achievements-1440x400.jpg'

const Academic = () => {
    return (
        <section>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="w-80"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-80"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-80"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <section className='academic-section'>
                <h1>Academic Programs</h1>
                <br />
                <br />
                <div className='row'>
                    <div className='col-md-4'>
                        <ul>Graduate Programs
                            <hr />
                            <li><span className='text-danger'>M.Sc in Computer Science and Engineering</span> (MCSE)</li>
                            <li><span className='text-danger'>Masters of Business Administration</span> (MBA)</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <ul>Undergraduate Programs
                            <hr />
                            <li><span className='text-danger'>B.Sc (Hons.) in Computer Science and Engineering</span> (CSE)</li>
                            <li><span className='text-danger'>B.Sc (Hons.) in Electronics and Communication Engineering</span> (ECE)</li>
                            <li><span className='text-danger'>Bachelor of Business Administration</span> (BBA)</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <ul>Diploma Programs
                            <hr />
                            <li><span className='text-danger'>Diploma in Computer Engineering</span></li>
                            <li><span className='text-danger'>Diploma in Electrical Engineering</span></li>
                            <li><span className='text-danger'>Diploma in Civil Engineering</span></li>
                            <li><span className='text-danger'>Diploma in Telecommunication Engineering</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Academic;