import React from 'react';
import { NavLink } from 'react-router-dom';

const logos = [
    { image: require('./../../images/client-logo/2.webp') },
    { image: require('./../../images/client-logo/14.webp') },
    { image: require('./../../images/client-logo/18.png') },
    { image: require('./../../images/client-logo/jaguar.png') },
    { image: require('./../../images/client-logo/kohler.png') },
    { image: require('./../../images/client-logo/3.webp') },
    { image: require('./../../images/client-logo/19.png') },
    { image: require('./../../images/client-logo/22.png') },
]

var bgimg1 = require('./../../images/background/bg-12.jpg');
var bgimg2 = require('./../../images/background/cross-line2.png');

class ClientsLogo1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-gray p-t80 p-b10 bg-repeat" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">Our Brands</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="client-grid m-b40">
                                <div className="row justify-content-center">
                                    {logos.map((item, index) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 m-b30" key={index}>
                                            <NavLink to={"/contact-us"} className="client-logo-pic">
                                                <img 
                                                    src={item.image} 
                                                    alt="" 
                                                    style={{
                                                        width: "180px", 
                                                        height: "auto",
                                                        // filter: "grayscale(100%)",
                                                        transition: "filter 0.3s ease"
                                                    }}
                                                    // onMouseOver={(e) => e.target.style.filter = "grayscale(0%)"}
                                                    // onMouseOut={(e) => e.target.style.filter = "grayscale(100%)"}
                                                />
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        <strong>Brands</strong>
                    </div>
                </div>
                
                {/* CSS for additional styling if needed */}
                <style>
                    {`
                    .client-logo-pic {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .client-logo-pic img:hover {
                        transform: scale(1.05);
                    }
                    `}
                </style>
            </>
        );
    }
};

export default ClientsLogo1;