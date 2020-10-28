import React from 'react';
import StateBar from '../components/StateBar';
import Logo from '../assets/images/logo.svg';
import '../css/Home.css';
import banner from '../assets/images/banner.png';
import MenuSlide from '../components/slider/MenuSlide';
import BestProd from '../components/slider/BestProd';
import NewProd from '../components/slider/NewProd';
import NavBar from '../components/NavBar';
const Home = () => {
    return (
        <div className="totalsection">
            <StateBar />
            <div className="header_logo">
                <img src={Logo} alt="" />
            </div>
            <section>
                <img src={banner} alt="" />
            </section>

            <section className="menuslide">
                <MenuSlide />
            </section>

            <section className="bestProd">
                <BestProd />
            </section>

            <section className="newProd">
                <NewProd />
            </section>
            <div>
                <NavBar />
            </div>
        </div>
    );
};

export default Home;
