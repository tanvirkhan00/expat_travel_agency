import React from 'react';

import HiroSection from '../Components/HiroSection';
import Community from '../Components/Community';
import TravelTypes from '../Components/TravelTypes';
import AboutUs from '../Components/AboutUs';

const Home = () => {
    return (
        <>
            <HiroSection />
            <Community />
            <TravelTypes />
            <AboutUs/>
        </>
    );
};

export default Home;