import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/DSC_6209-1440x400.jpg'
import img2 from '../../Images/DSC_6211-1440x400.jpg'
import TeacherDetails from '../TeacherDetails/TeacherDetails';
import './Library.css'

const Library = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./campus.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <section className='faculty-nm'>
            <h2>"Faculty Member"</h2>
            <div className='row'>
                {
                    teachers?.map(teacher => <TeacherDetails
                        key={teacher.zip}
                        teacher={teacher}
                    ></TeacherDetails>)
                }
            </div>
            <br />
            <hr />
            <div className='library-bg'>
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
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <br />
                <h3>"Library"</h3>
                <p className='library-para'>Institute of Science and Technology is equipped with a well-maintained library housed with books related to business, science and technology, including the latest trends. With around 10,000 books and journals relevant to the curriculum of the courses offered at Institute of Science and Technology. Institute of Science and Technology boasts of having the finest source of information that enables the students to keep abreast with the latest development in their field of study.</p>
            </div>
        </section>
    );
};

export default Library;