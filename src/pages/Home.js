import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Dynamictext from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Home = () => {
    return (
        <main>
           <Mouse />
           <div className="home">
            <Navigation />
            <SocialNetwork />
            <div className="home-main">
            <div className="main-content">
            <h1>REACT AGENCY</h1>
            <h2>
                <Dynamictext />
            </h2>
            </div>
           </div>
           <ButtonsBottom rigth={"/project-1"} />
        </div>
        </main>
    );
};

export default Home;