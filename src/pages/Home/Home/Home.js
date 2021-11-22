import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Info from '../Info/Info';
import News from '../News/News';
import Planning from '../Planning/Planning';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <h3 className="bg-pink-800 text-pink-800">h</h3>
            <Banner></Banner>
            <Features></Features>
            <Planning></Planning>
            <Services></Services>
            <News></News>
            <Info></Info>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;