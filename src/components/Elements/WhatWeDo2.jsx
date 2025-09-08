import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Gessi',
        description: 'Exclusive bathroom and kitchen fittings, known worldwide for fashionable and modern designs.',
    },
    {
        count: '02',
        title: 'Porcelanosa ',
        description: 'Leading manufacturer of ceramic wall and floor tiles, blending innovative design with high-quality materials.',
    },
    {
        count: '03',
        title: 'Marmorin ',
        description: 'Complete bathroom and kitchen solutions, from concept design to final product, trusted internationally.',
    },
    {
        count: '04',
        title: 'Kohler ',
        description: 'Innovative and stylish products that improve living spaces with quality and elegance.',
    },
    {
        count: '05',
        title: 'Jacuzzi',
        description: 'Global leader in wellness and spa solutions, combining technology, design, and comfort',
    },
    {
        count: '06',
        title: 'Lea',
        description: 'High-quality ceramic solutions with cutting-edge production and superior design, present across 80+ countries.',
    },
]

var bgimg1 = require('./../../images/background/bg-5.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class WhatWeDo2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b50 bg-repeat overflow-hide" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        <div className="large-title-block text-center">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-center">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one"> Brands We Offer</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                        </div>
                        <div className="section-content">
                            <div className="row number-block-two-outer">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="number-block-two animate-in-to-top bdr-gray-light bdr-solid bdr-1">
                                            <div className="figcaption bg-white  p-a30">
                                                <h4 className="m-t0">{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to={"/services-detail"} className="site-button-link">Read More</NavLink>
                                                <div className="figcaption-number animate-in-to-top-content">
                                                    <span>{item.count}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default WhatWeDo2;