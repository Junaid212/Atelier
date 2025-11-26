import React from 'react';
import CountUp from 'react-countup';

var bgimg1 = require('./../../images/background/bg.webp');
var bgimg2 = require('./../../images/background/bg-5.png');

class Statistics1 extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full overlay-wraper sx-bg-secondry mobile-page-padding  p-t80 p-b50 bg-parallax ml-auto" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                        <div className="overlay-main bg-black opacity-05" />
                        <div className="container">
                            <div className="section-content">
                                <div className="counter-blocks">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 m-b30 ">
                                            <div className="sx-count text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                <h2 className="m-t0 sx-text-primary text-left"><span className="counter"><CountUp end={25} duration={5} />+</span></h2>
                                                <h4 className="m-b0">Years of Experience</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                <h2 className="m-t0  sx-text-primary text-left"><span className="counter"><CountUp end={50} duration={5} />K+<small>sq.ft</small></span></h2>
                                                <h4 className="m-b0">Showroom Space</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                <h2 className="m-t0  sx-text-primary text-left"><span className="counter"><CountUp end={50} duration={5} />+</span></h2>
                                                <h4 className="m-b0"> Brands Collab<br/><br/></h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 m-b30">
                                            <div className="sx-count  text-white sx-icon-box-wraper bg-repeat  p-a30" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                                <h2 className="m-t0  sx-text-primary text-left"><span className="counter"><CountUp end={6} duration={5} /></span><span></span></h2>
                                                <h4 className="m-b0">Categories<br/><br/></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Statistics1;