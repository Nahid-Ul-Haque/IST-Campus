import React from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <Menubar></Menubar>
            <ContactDetails></ContactDetails>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;