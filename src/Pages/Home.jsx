import React from 'react';

import HiroSection from '../Components/HiroSection';
import Community from '../Components/Community';
import TravelTypes from '../Components/TravelTypes';
import AboutUs from '../Components/AboutUs';
import Processing from '../Components/Processing';
import Testimonial from '../Components/Testimonial';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <HiroSection />
            <Community />
            <TravelTypes />
            <AboutUs />
            <Processing />
            <Testimonial />
            <Faq />
            <Footer />
        </>
    );
};

export default Home;