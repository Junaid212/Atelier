import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider4 from './../Elements/Slider4';
import About1 from './../Elements/About1';
import WhatWeDo1 from './../Elements/WhatWeDo1';
import Testimonials1 from './../Elements/Testimonials1';
import Services1 from './../Elements/Services1';
import Projects1 from './../Elements/Projects1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import Team1 from './../Elements/Team1';
import Projects2 from '../Elements/Projects2';
import Services2 from '../Elements/Services2';
import Statistics1 from '../Elements/Statistics1';
import Testimonials2 from '../Elements/Testimonials2';
import Footer2 from '../Common/Footer2';
import Header4 from '../Common/Header4';

class Home4 extends React.Component {
    render() {
        return (
            <>
                <Header4  />
                <div className="page-content">
                    {/* SLIDER START */}
                    <Slider4 />
                    <About1 />
                    <Services1 />
                    {/* <WhatWeDo1 /> */}
                    {/* <Testimonials1 /> */}
                    <Projects2 />
                    <Statistics1 />
                    <Services2 />
                    <ClientsLogo1 />
                    
                    <Testimonials2 separatoralignment="separator-center" />
                    {/* <Team1 /> */}
                </div>

                <Footer2 />
            </>
        );
    };
};

export default Home4;