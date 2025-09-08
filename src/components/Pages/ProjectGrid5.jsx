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
    { image: require('./../../images/client-logo/Bosch.png'), filter: 'cat-1' },
    { image: require('./../../images/client-logo/Hafele.png'), filter: 'cat-2' },     
    { image: require('./../../images/client-logo/Jaguar.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/kaff.png'), filter: 'cat-1' },
    { image: require('./../../images/client-logo/Kajaria.png'), filter: 'cat-4' },    
    { image: require('./../../images/client-logo/Kohler.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/Lg.png'), filter: 'cat-5' },         
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Bosch.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Hafele.png'), filter: 'cat-2' },     
    { image: require('./../../images/client-logo/Jaguar.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/kaff.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Kajaria.png'), filter: 'cat-4' },    
    { image: require('./../../images/client-logo/Kohler.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/Lg.png'), filter: 'cat-6' },         
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Bosch.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Hafele.png'), filter: 'cat-2' },     
    { image: require('./../../images/client-logo/Jaguar.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/kaff.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Kajaria.png'), filter: 'cat-4' },    
    { image: require('./../../images/client-logo/Kohler.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/Lg.png'), filter: 'cat-5' },         
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Bosch.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Hafele.png'), filter: 'cat-2' },     
    { image: require('./../../images/client-logo/Jaguar.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/kaff.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Kajaria.png'), filter: 'cat-4' },    
    { image: require('./../../images/client-logo/Kohler.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/Lg.png'), filter: 'cat-6' },         
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Bosch.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Hafele.png'), filter: 'cat-2' },     
    { image: require('./../../images/client-logo/Jaguar.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/kaff.png'), filter: 'cat-1' },       
    { image: require('./../../images/client-logo/Kajaria.png'), filter: 'cat-4' },    
    { image: require('./../../images/client-logo/Kohler.png'), filter: 'cat-3' },     
    { image: require('./../../images/client-logo/Lg.png'), filter: 'cat-5' },         
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
    { image: require('./../../images/client-logo/Regilix.png'), filter: 'cat-2' },
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
                                            <NavLink to={"/brands"} className="client-logo-pic">
                                                <img 
                                                    src={item.image} 
                                                    alt={`brand-logo-${index}`}
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
                    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
                    gap: 30px 20px;
                    justify-items: center;
                    align-items: center;
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
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                }
                
                // .client-logo-pic:hover {
                //     transform: translateY(-5px);
                //     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                // }
                
                .client-logo-pic img {
                    max-width: 100%;
                    height: auto;
                    max-height: 70px;
                    object-fit: contain;
                    margin-bottom: 10px;
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
                    
                    .client-logo-pic img {
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
                    
                    .client-logo-pic img {
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
                    
                    .client-logo-pic img {
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