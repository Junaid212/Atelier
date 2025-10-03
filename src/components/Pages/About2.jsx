import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About3 from './../Elements/About3';
import WhatWeDo3 from './../Elements/WhatWeDo3';
import Statistics1 from './../Elements/Statistics1';
import Team1 from './../Elements/Team1';
import ClientsLogo1 from './../Elements/ClientsLogo1';
import WhatWeDo6 from '../Elements/WhatWeDo6';
import Achievements1 from '../Elements/Achievements1';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/ab-banner.webp');

class Home4 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="The ATELIER Experience" pagename="About" description="GROUP4 began in 2007 and was relaunched in 2025 with a fresh vision. With 25+ years of experience, we bring over 50+ global brands and smart design solutions to create stylish and comfortable homes." bgimage={bnrimg}/>
                    <About3 bgcolor="bg-gray" />
                    {/* <WhatWeDo3 /> */}
                    <WhatWeDo6 />
                    <Achievements1 />
                    <Statistics1 />
                    <Team1 />
                    {/* <ClientsLogo1 /> */}
                </div>

                <Footer2 />
            </>
        );
    };
};

export default Home4;