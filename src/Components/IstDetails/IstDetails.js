import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Library from '../Library/Library';
import Menubar from '../Menubar/Menubar';

const IstDetails = () => {
    return (
        <div>
            <Header></Header>
            <Menubar></Menubar>
            <Library></Library>
            <Footer></Footer>
        </div>
    );
};

export default IstDetails;