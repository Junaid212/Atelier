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
                    <div className="section-full p-tb80 column-grid-4 inner-page-padding">
                        <div className="container">

                            {/* Filter Nav START */}
                            <div className="filter-wrap p-b30 text-center">
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
                            </div>
                            {/* Filter Nav END */}

                            {/* Logos Grid START */}
                            <div className="client-grid m-b40">
                            <div className="centered-grid-wrapper">
                                <div className="masonry-outer clearfix grid-10">
                                    {logos.map((item, index) => (
                                        <div key={index} className={`${item.filter} masonry-item col-custom-10`}>
                                            <NavLink to={"/brands"} className="client-logo-pic">
                                                <img 
                                                    src={item.image} 
                                                    alt={`brand-logo-${index}`} 
                                                    style={{ width: "120px", height: "auto" }} 
                                                />
                                                <div>
                                                    <span>View More</span>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                            {/* Logos Grid END */}

                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <style>{`
                /* Custom 10-column grid */
.grid-10 {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 30px; /* space between columns */
  row-gap: 40px; /* space between rows */
  padding-left: 50px;
}

.col-custom-10 {
  text-align: center;
}

/* Large screens (desktops) */
@media (max-width: 1400px) {
  .grid-10 {
    grid-template-columns: repeat(8, 1fr);
    padding-left: 30px;
  }
}

/* Medium screens (laptops/tablets landscape) */
@media (max-width: 1024px) {
  .grid-10 {
    grid-template-columns: repeat(5, 1fr);
    padding-left: 20px;
  }
}

/* Small tablets */
@media (max-width: 768px) {
  .grid-10 {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 10px;
  }
}

/* Mobile screens */

  @media (max-width: 576px) {
  .grid-10 {
    grid-template-columns: repeat(3, 1fr) !important; /* ✅ force 3 columns */
    column-gap: 15px !important;
    row-gap: 20px !important;
    padding-left: 0 !important;
    justify-items: center !important; /* center each logo */
  }

  .col-custom-10 {
    width: 100% !important;
  }

  .col-custom-10 img {
    width: 90px !important;
    height: auto !important;
  }
}



                `}</style>

                <Footer2 />
            </>
        );
    };
};

export default ProjectGrid5;
