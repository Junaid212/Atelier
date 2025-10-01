import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        title: 'Signature Selection',
        flaticon: 'flaticon-sketch',
        description: 'We bring you top-quality brands that set the standard for style and reliability, helping you create homes that feel both modern and welcoming.',
        color: '#4A6572' // Dark blue-gray
    },
    {
        count: '02',
        title: 'World-Class Solutions',
        flaticon: 'flaticon-stairs',
        description: 'Premium products from around the world, designed to make every corner of your home functional, elegant, and long-lasting.',
        color: '#F9C828' // Deep orange
    },
    {
        count: '03',
        title: 'Best for Your Home',
        flaticon: 'flaticon-window',
        description: 'Carefully chosen brands that make it easy to design spaces that are comfortable, stylish, and perfect for your lifestyle.',
        color: '#000000' // Indigo light
    },
    {
        count: '04',
        title: 'Inspiring Brands',
        flaticon: 'flaticon-skyline',
        description: 'Products that spark ideas and allow you to personalize your home, turning ordinary spaces into beautiful, creative areas.',
        color: '#F9C828' // Teal
    },
    {
        count: '05',
        title: 'Elevate Living',
        flaticon: 'flaticon-bed',
        description: 'Every brand we offer adds a touch of comfort, style, and quality, making everyday life at home feel special.',
        color: '#000000' // Light green
    },
    {
        count: '06',
        title: 'Crafting Luxury',
        flaticon: 'flaticon-door',
        description: 'Helping you build modern, luxurious spaces that reflect your personality while keeping your home functional and elegant.',
        color: '#4A6572' // Pink
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Services1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80  p-b50 bg-gray">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one ">Quality for Every Home</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
                                        <div className="sx-icon-box-wraper icon-count-2-outer">
                                            <div className="icon-count-2 bg-white" style={{ 
                                                borderTop: `4px solid ${item.color}`,
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',height:'400px'
                                            }}>
                                                <span className="icon-count-number" style={{ color: item.color }}>
                                                    {item.count}
                                                </span>
                                                <div className="icon-xl inline-icon m-b5 scale-in-center">
                                                    <span className="icon-cell" style={{ color: item.color }}>
                                                        <i className={item.flaticon} />
                                                    </span>
                                                </div>
                                                <div className="icon-content">
                                                    <h4 className="sx-tilte" style={{ color: item.color }}>
                                                        {item.title}
                                                    </h4>
                                                    <p>{item.description}</p>
                                                    {/* <div className="text-left">
                                                        <NavLink 
                                                            to={"/services-detail"} 
                                                            className="site-button-link"
                                                            style={{ color: item.color }}
                                                        >
                                                            Read More
                                                        </NavLink>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Services</strong>
                    </div>
                </div>
                
                {/* Add some custom CSS for hover effects */}
                <style>
                    {`
                    .icon-count-2:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    }
                    `}
                </style>
            </>
        );
    }
};

export default Services1;