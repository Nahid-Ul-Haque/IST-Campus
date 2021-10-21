import React from 'react';
import Academic from '../Academic/Academic';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <br />
            <Menubar></Menubar>
            <Academic></Academic>
            <Footer></Footer>
        </div>
    );
};

export default Home;