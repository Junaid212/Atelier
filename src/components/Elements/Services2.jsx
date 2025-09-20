import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        count: '01',
        title: 'Interior Design',
        flaticon: 'flaticon-sketch',
        image: require('./../../images/services/service-projects/7.png'),
    },
    {
        count: '02',
        title: 'Kitchen & Bathroom Solutions',
        flaticon: 'flaticon-stairs',
        image: require('./../../images/services/service-projects/8.png'),
    },
    {
        count: '03',
        title: 'Flooring & Surfaces',
        flaticon: 'flaticon-window',
        image: require('./../../images/services/service-projects/9.png'),
    },
    {
        count: '04',
        title: 'Outdoor & Wellness Spaces',
        flaticon: 'flaticon-home',
        image: require('./../../images/services/service-projects/10.png'),
    },
    // {
    //     count: '05',
    //     title: 'Furniture',
    //     flaticon: 'flaticon-bed',
    //     image: require('./../../images/services/service-projects/5.png'),
    // },
    // {
    //     count: '06',
    //     title: 'Decoration',
    //     flaticon: 'flaticon-door',
    //     image: require('./../../images/services/service-projects/7.png'),
    // }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services2 extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            margin:0,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },			
                991:{
                    items:3
                },
                1200:{
                    items:4
                }	
                
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 bg-white bg-change-section">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="sep-line-one">Tailored for You</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                    </div>
                    <OwlCarousel className="owl-carousel service-slider owl-btn-vertical-center" {...options}>
                        {services.map((item, index) => (
                            <div className="item" key={index}>
                                <div className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                    <div className="overlay-main bg-black opacity-05" />
                                    <div className="bg-content-mid-outer">
                                        <div className="bg-content-mid">
                                            <div className="sx-icon-box-wraper center   text-white">
                                                <div className="icon-lg m-b15">
                                                    <span className="icon-cell"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte"> <NavLink to={"/products"} className="sx-text-white"> {item.title}</NavLink></h4>
                                                </div>
                                            </div>
                                            <span className="bgcall-block-number">{item.count}</span>
                                            <div className="bg-overlay" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </>
        );
    }
};

export default Services2;