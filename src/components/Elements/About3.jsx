import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

var bgimg1 = require('./../../images/au.webp');

class About3 extends React.Component {
    render() {
        return (
            <>
                <div className={`${this.props.bgcolor} section-full mobile-page-padding p-t80 p-b50`}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-home-3 m-b30 bg-white">
                                        <h3 className="m-t0 m-b20 sx-tilte">Making Your Home Truly Special</h3>
                                        <p> ATELIER helps you create beautiful and comfortable homes with top-quality products. We bring together the best brands from around the world, all under one roof. Our goal is to make your home stylish, practical, and truly yours.</p>
                                        <ul className="list-angle-right anchor-line">
                                            <li>Everything in One Place: Six categories with 50+ brands each.</li>
                                            <li>Trusted Experience: Over 25 years in home décor.</li>
                                            <li>Top International Brands: Quality products for every space.</li>
                                            <li>Made for You: Spaces designed to match your style.</li>
                                        </ul>
                                        <div className="text-left">
                                            <NavLink to="/products" className="site-button btn-half"><span>See Details</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover bg-center overlay-wraper m-b30" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    {/* <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink> */}

                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div> */}
            </>
        );
    }
};

export default About3;