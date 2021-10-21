import React from 'react';
import AboutIstDetails from '../AboutIstDetails/AboutIstDetails';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';

const AboutIst = () => {
    return (
        <div>
            <Header></Header>
            <Menubar></Menubar>
            <AboutIstDetails></AboutIstDetails>
            <Footer></Footer>
        </div>
    );
};

export default AboutIst;