import React from 'react';

import HiroSection from '../Components/HiroSection';
import Community from '../Components/Community';
import TravelTypes from '../Components/TravelTypes';
import AboutUs from '../Components/AboutUs';
import Processing from '../Components/Processing';
import Testimonial from '../Components/Testimonial';

const Home = () => {
    return (
        <>
            <HiroSection />
            <Community />
            <TravelTypes />
            <AboutUs />
            <Processing />
            <Testimonial />
        </>
    );
};

export default Home;