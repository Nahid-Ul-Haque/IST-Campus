import React from 'react';
import './TeacherDetails.css'

const TeacherDetails = (props) => {
    const { name, img, Profession, Dept } = props.teacher || {}
    return (
        <div className='col-md-4 g-4'>
            <div className='col'>
                <div className='card-container'>
                    <img src={img} alt="" />
                    <div className='card-body'>
                        <h4>Name:{name}</h4>
                        <h5><small className='text-primary'>{Profession}</small></h5>
                        <h6><small className='text-primary'>Dept:{Dept}</small></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;