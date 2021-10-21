import React from 'react';
import './ContactDetails.css'

const ContactDetails = () => {
    return (
        <div className='contact-details'>
            <h2>Contact Us</h2>
            <hr />
            <div className='row'>
                <div className='col-md-6'>
                    <p>House # 54, Road # 15A (New), 26 (Old)
                        Dhanmondi R/A, Dhaka 1209.
                        [East of Shankar Bus Stand]</p>
                </div>
                <div className='col-md-6'>
                    <p>Phone: +88 02-55029352, +88 02-55029353
                        Mobile: +8801726937910
                        Email: info@ist.edu.bd</p>
                </div>

            </div>
        </div>
    );
};

export default ContactDetails;