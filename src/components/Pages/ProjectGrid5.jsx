import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer2 from '../Common/Footer2';
import Banner from './../Elements/Banner';

const filters = [
     { label: "Tiles", filter: ".cat-1" },
    { label: "Kitchens & Wardrobe", filter: ".cat-2" },
    { label: "Appliance", filter: ".cat-3" },
    { label: "Sanitary", filter: ".cat-4" },
    { label: "Bathroom", filter: ".cat-5" },
    { label: "Sinks", filter: ".cat-6" }
];

const logos = [
    { image: require('./../../images/client-logo/bosch.png') },
    { image: require('./../../images/client-logo/hafele.png') },
    { image: require('./../../images/client-logo/jaguar.png') },
    { image: require('./../../images/client-logo/kaff.png') },
    { image: require('./../../images/client-logo/kajaria.png') },
    { image: require('./../../images/client-logo/kohler.png') },
    { image: require('./../../images/client-logo/lg.png') },
    { image: require('./../../images/client-logo/reginox.png') },
    { image: require('./../../images/client-logo/artize.png') },
    { image: require('./../../images/client-logo/2.webp') },
    { image: require('./../../images/client-logo/3.webp') },
    { image: require('./../../images/client-logo/4.webp') },
    { image: require('./../../images/client-logo/5.webp') },
    { image: require('./../../images/client-logo/6.webp') },
    { image: require('./../../images/client-logo/7.webp') },
    { image: require('./../../images/client-logo/8.webp') },
    { image: require('./../../images/client-logo/9.webp') },
    { image: require('./../../images/client-logo/10.webp') },
    { image: require('./../../images/client-logo/11.webp') },
    { image: require('./../../images/client-logo/12.webp') },
    { image: require('./../../images/client-logo/13.webp') },
    { image: require('./../../images/client-logo/14.webp') },
    { image: require('./../../images/client-logo/15.webp') },
    { image: require('./../../images/client-logo/16.webp') },
    { image: require('./../../images/client-logo/18.png') },
    { image: require('./../../images/client-logo/19.png') },
    { image: require('./../../images/client-logo/20.png') },
    { image: require('./../../images/client-logo/21.png') },
    { image: require('./../../images/client-logo/22.png') },
    { image: require('./../../images/client-logo/23.png') },
    
    
];

var bnrimg = require('./../../images/banner/br-banner.webp');

class ProjectGrid5 extends React.Component {
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
    }

    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner 
                        title="Discover the Brands We Trust" 
                        pagename="Brands" 
                        description="Explore our curated selection of over 50 top international brands across 6 categories, bringing quality, style, and innovation together under one roof for your home." 
                        bgimage={bnrimg}
                    />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">

                            {/* Filter Nav START */}
                            {/* <div className="filter-wrap p-b50 text-center">
                                <ul className="filter-navigation masonry-filter clearfix">
                                    <li className="active">
                                        <NavLink to={"#"} className="btn from-top" data-filter="*" data-hover="All">All</NavLink>
                                    </li>
                                    {filters.map((item, index) => (
                                        <li key={index}>
                                            <NavLink to={"#"} className="btn from-top" data-filter={item.filter}>
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                            {/* Filter Nav END */}

                            {/* Logos Grid START */}
                            <div className="client-grid">
                                <div className="logos-grid-container">
                                    {logos.map((item, index) => (
                                        <div key={index} className={`logo-item ${item.filter}`}>
                                            <NavLink to={"/contact-us"} className="client-logo-pic">
                                                <img 
                                                    src={item.image} 
                                                    alt={`brand-logo-${index}`}
                                                    className="brand-logo-img"
                                                />
                                                {/* <div className="logo-hover">
                                                    <span>View More</span>
                                                </div> */}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Logos Grid END */}

                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <style>{`
                .logos-grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    gap: 30px 20px;
                    justify-items: center;
                    align-items: center;
                    margin-top:5px;
                }
                
                .logo-item {
                    width: 100%;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                
                .client-logo-pic {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding: 20px;
                    // background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                }
                
                .client-logo-pic:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }
                
                .brand-logo-img {
                    max-width: 100%;
                    height: auto;
                    max-height: 70px;
                    object-fit: contain;
                    margin-bottom: 10px;
                    // filter: grayscale(100%);
                    // opacity: 0.8;
                    transition: all 0.3s ease;
                }
                
                .client-logo-pic:hover .brand-logo-img {
                    filter: grayscale(0%);
                    // opacity: 1;
                }
                
                // .logo-hover {
                //     opacity: 0;
                //     transition: opacity 0.3s ease;
                //     margin-top: 8px;
                // }
                
                // .client-logo-pic:hover .logo-hover {
                //     opacity: 1;
                // }
                
                // .logo-hover span {
                //     font-size: 12px;
                //     color: #333;
                //     font-weight: 500;
                // }
                
                /* Responsive adjustments */
                @media (min-width: 1600px) {
                    .logos-grid-container {
                        grid-template-columns: repeat(8, 1fr);
                    }
                }
                
                @media (max-width: 1200px) {
                    .logos-grid-container {
                        grid-template-columns: repeat(6, 1fr);
                    }
                }
                
                @media (max-width: 992px) {
                    .logos-grid-container {
                        grid-template-columns: repeat(5, 1fr);
                        gap: 25px 15px;
                    }
                    
                    .client-logo-pic {
                        padding: 15px;
                    }
                    
                    .brand-logo-img {
                        max-height: 60px;
                    }
                }
                
                @media (max-width: 768px) {
                    .logos-grid-container {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 20px 12px;
                    }
                    
                    .client-logo-pic {
                        padding: 12px;
                    }
                    
                    .brand-logo-img {
                        max-height: 50px;
                    }
                }
                
                @media (max-width: 576px) {
                    .logos-grid-container {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 15px 10px;
                    }
                    
                    .client-logo-pic {
                        padding: 10px;
                    }
                    
                    .brand-logo-img {
                        max-height: 40px;
                    }
                    
                    .logo-hover span {
                        font-size: 10px;
                    }
                }
                
                @media (max-width: 400px) {
                    .logos-grid-container {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                
                /* Filter button styles */
                .filter-navigation {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin: 0 -8px;
                }
                
                .filter-navigation li {
                    padding: 0 8px;
                    margin-bottom: 15px;
                }
                
                .filter-navigation .btn {
                    padding: 10px 20px;
                    border-radius: 30px;
                    background: #f5f5f5;
                    color: #333;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .filter-navigation .btn:hover,
                .filter-navigation .active .btn {
                    background: #333;
                    color: #fff;
                }
                    
                `}</style>

                <Footer2 />
            </>
        );
    };
};

export default ProjectGrid5;