import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        id: 1,
        image: require('./../../images/projects/square/t.webp'),
        title: 'Tiles',
        description: 'Stylish and durable tiles to enhance every wall and floor in your home.',
        link: '/tiles'  // Added unique link
    },
    {
        id: 2,
        image: require('./../../images/projects/square/kw.webp'),
        title: 'Kitchen & Wardrobe',
        description: 'Smart, elegant designs that make your kitchens and wardrobes functional and beautiful.',
        link: '/kitchen-wardrobe'  // Added unique link
    },
    {
        id: 3,
        image: require('./../../images/projects/square/ap.webp'),
        title: 'Appliance',
        description: 'High-quality appliances combining efficiency, technology, and sleek design for modern living.',
        link: '/appliance'  // Added unique link
    },
    {
        id: 4,
        image: require('./../../images/projects/square/san.webp'),
        title: 'Sanitary',
        description: 'Premium sanitary fittings that bring comfort, style, and functionality to your bathrooms.',
        link: '/sanitary'  // Added unique link
    },
    {
        id: 5,
        image: require('./../../images/projects/square/b.webp'),
        title: 'Bathroom',
        description: 'Modern fixtures and finishes to create a comfortable, stylish, and relaxing space.',
        link: '/bathroom'  // Added unique link
    },
    {
        id: 6,
        image: require('./../../images/projects/square/sn.webp'),
        title: 'Sinks',
        description: 'Durable and elegant sinks designed for convenience and style in kitchens and utility areas.',
        link: '/sinks'  // Added unique link
    }
]

var bgimg1 = require('./../../images/background/cross-line2.png');

class Projects7 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            center: false,
            items: 3,
            margin: 40,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                },
                640: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2,
                    margin: 15
                },
                991: {
                    items: 3,
                    margin: 15
                },
                1200: {
                    items: 3
                }
            }
        };
        
        return (
            <>
                <div className="section-full p-tb80 bg-gray inner-page-padding">
                    <div className="container-fluid">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="sx-separator-outer separator-left">
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                        <h3 className="sep-line-one">Other Products</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel mfp-gallery project-carousel project-carousel3 owl-btn-vertical-center p-lr80" {...options}>
                                    {projects.map((item) => (
                                        <div key={item.id} className="item">
                                            <div className="project-mas m-a30">
                                                <div className="image-effect-one">
                                                    <img src={item.image} alt={item.title}/>
                                                    <div className="figcaption">
                                                        <NavLink to={item.link} className="mfp-link">
                                                            <i className="fa fa-arrows-alt" />
                                                        </NavLink>
                                                    </div>
                                                </div>
                                                <div className="project-info p-a20 bg-white">
                                                    <h4 className="sx-tilte m-t0">
                                                        <NavLink to={item.link}>{item.title}</NavLink>
                                                    </h4>
                                                    <p>{item.description}</p>
                                                    <NavLink to={item.link}>
                                                        <i className="link-plus bg-primary" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Projects7;