import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <ul className="d-flex justify-content-center menubar">
                <Link to="/home" className='items'>
                    <li>Home</li>
                </Link>
                <Link to="/services" className='items'>
                    <li>Services</li>
                </Link>
                <Link to='/clubs' className='items'>
                    <li>Clubs</li>
                </Link>
                <Link to="/about" className='items'>
                    <li>About IST</li>
                </Link>
                <Link to='/contact' className='items'>
                    <li>Contact us</li>
                </Link>

            </ul>
        </div>
    );
};

export default Menubar;