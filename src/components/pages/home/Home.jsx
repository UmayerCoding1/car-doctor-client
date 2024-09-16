import React from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import Service from './service/Service';
import Team from './team/Team';
import Features from './features/Features';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <Team/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;