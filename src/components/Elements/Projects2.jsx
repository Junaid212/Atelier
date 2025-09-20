import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Tiles", filter: ".cat-1" },
    { label: "Kitchens & Wardrobe", filter: ".cat-2" },
    { label: "Appliance", filter: ".cat-3" },
    { label: "Sanitary", filter: ".cat-4" },
    { label: "Bathroom", filter: ".cat-5" },
    { label: "Sinks", filter: ".cat-5" }
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
    // {
    //     image: require('./../../images/projects/portrait/pic7.png'),
    //     title: 'Qatar Pavilion',
    //     address: 'Muscat, Sultanate of Oman',
    //     filter: 'cat-3'
    // },
    // {
    //     image: require('./../../images/projects/portrait/pic8.png'),
    //     title: 'Museum',
    //     address: 'Muscat, Sultanate of Oman',
    //     filter: 'cat-2'
    // },
    // {
    //     image: require('./../../images/projects/portrait/pic9.png'),
    //     title: 'Modern house',
    //     address: 'Muscat, Sultanate of Oman',
    //     filter: 'cat-1'
    // }
]

var bgimg1 = require('./../../images/background/cross-line2.png');
var bgimg2 = require('./../../images/background/cross-line.png');

class Projects2 extends React.Component {
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
                <div className="section-full  mobile-page-padding bg-white  p-t80 p-b80">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                    <h3 className="sep-line-one">Explore Our Products</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
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
                        <ul className="masonry-outer mfp-gallery work-grid row clearfix list-unstyled m-b0">
    {projects.map((item, index) => (
        <div
            key={index}
            className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 col-6 m-b30`}
        >
            <div className="sx-box image-hover-block">
                <div className="sx-thum-bx">
                    <NavLink to={item.link}><img src={item.image} alt="" /></NavLink>
                </div>
                <div className="sx-info p-t20 text-white">
                    <h4 className="sx-tilte">
                        <NavLink to={item.link}>{item.title}</NavLink>
                    </h4>
                </div>
                <a className="mfp-link" href={item.image}>
                    <i className="fa fa-arrows-alt" />
                </a>
            </div>
        </div>
    ))}
</ul>

                        {/* GALLERY CONTENT END */}
                        {/* <div className="text-center load-more-btn-outer" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                            <button className="site-button-secondry btn-half"><span>Load More</span></button>
                        </div> */}
                    </div>
                </div>
            </>
        );
    }
};

export default Projects2;