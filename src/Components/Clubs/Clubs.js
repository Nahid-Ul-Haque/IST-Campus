import React from 'react';
import ClubDetails from '../ClubDetails/ClubDetails';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';

const Clubs = () => {
    return (
        <div>
            <Header></Header>
            <Menubar></Menubar>
            <ClubDetails></ClubDetails>
            <Footer></Footer>
        </div>
    );
};

export default Clubs;