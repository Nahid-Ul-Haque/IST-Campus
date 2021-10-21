import React from 'react';
import logo from '../../Images/IST_logo.png'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className='row header-name'>
                    <div className='col-md-1'>
                        <img className='w-5' src={logo} alt="" />
                    </div>
                    <div className='col-md-10'>
                        <h4 className='text-danger'>Institute Of Science and Technology</h4>
                        <p>A Center of Excellence for Education</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6'>
                <input className='search-input' type="text" placeholder='' />
                <button className='btn-search'>
                    Sign <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Header;