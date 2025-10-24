import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Footer2 from '../Common/Footer2';

const filters = [
   { label: "Tiles", filter: ".cat-1" },
    { label: "Kitchens & Wardrobe", filter: ".cat-2" },
    { label: "Appliance", filter: ".cat-3" },
    { label: "Sanitary", filter: ".cat-4" },
    { label: "Bathroom", filter: ".cat-5" },
    { label: "Sinks", filter: ".cat-6" }
];

const projects = [
    {
        image: require('./../../images/projects/portrait/1.png'),
        title: 'Tiles',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-1',
        link: '/tiles'
    },
    {
        image: require('./../../images/projects/portrait/2.png'),
        title: 'Kitchen & Wardrobe',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2',
        link: '/kitchen-wardrobe'
    },
    {
        image: require('./../../images/projects/portrait/3.png'),
        title: 'Appliance',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3',
        link: '/appliance'
    },
    {
        image: require('./../../images/projects/portrait/4.png'),
        title: 'Sanitary',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4',
        link: '/sanitary'
    },
    {
        image: require('./../../images/projects/portrait/5.png'),
        title: 'Bathroom',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-5',
        link: '/bathroom'
    },
    {
        image: require('./../../images/projects/portrait/6.png'),
        title: 'Sinks',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-6',
        link: '/sinks'
    }
]


var bnrimg = require('./../../images/banner/pr-banner.webp');
var bgimg1 = require('./../../images/background/cross-line.png');

class ProjectGrid3 extends React.Component {
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

    };
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Quality Products" pagename="Products" description="Discover top brands across six categories, from stylish interiors to practical essentials. Everything you need to make your home look and feel amazing is right here." bgimage={bnrimg}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            {/* Filter Nav START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation masonry-filter clearfix">
                                    <li className="active"><NavLink to={"#"} className="btn from-top" data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><NavLink to={"#"} className="btn from-top" data-filter={item.filter} >{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                            {/* Filter Nav END */}
                            {/* GALLERY CONTENT START */}
                            <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item  col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                        <div className="sx-box image-hover-block">
  <div className="sx-thum-bx">
    <NavLink to={item.link}>
      <img src={item.image} alt={item.title} />
    </NavLink>
  </div>

  <div className="sx-info p-t20 text-white">
    <h4 className="sx-tilte">
      <NavLink to={item.link}>{item.title}</NavLink>
    </h4>
    {/* <p className="m-b0">{item.address}</p> */}
  </div>

  <a className="mfp-link" href={item.image}>
    {/* <i className="fa fa-arrows-alt" /> */}
  </a>
</div>

                                    </div>
                                ))}
                            </ul>
                            {/* GALLERY CONTENT END */}
                            {/* <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                <button className="site-button-secondry btn-half"><span>Load More</span></button>
                            </div> */}
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer2 />
                
                {/* Add custom CSS for mobile responsiveness */}
                <style jsx>{`
                    @media (max-width: 576px) {
                        .filter-navigation {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                        
                        .filter-navigation li {
                            margin: 5px;
                        }
                        
                        .filter-navigation .btn {
                            padding: 8px 12px;
                            font-size: 12px;
                        }
                        
                        .col-sm-6 {
                            flex: 0 0 50%;
                            max-width: 50%;
                            padding: 0 8px;
                        }
                        
                        .m-b30 {
                            margin-bottom: 20px;
                        }
                        
                        .sx-info {
                            padding-top: 10px !important;
                        }
                        
                        .sx-tilte {
                            font-size: 14px;
                        }
                    }
                `}</style>
            </>
        );
    };
};

export default ProjectGrid3;