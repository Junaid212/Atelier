import React from 'react';

const achievements1 = [
    {
        title: 'Beginnings',
        description: 'GROUP4 started its journey as a home décor and lifestyle venture, bringing new ideas and solutions to modern living.',
        date: '01',
        month: 'Oct',
        year: '2007',
    },
    {
        title: 'A New Identity',
        description: 'The brand was officially renamed ATELIER, marking a stronger vision and presence in the design and décor space.',
        date: '02',
        month: 'Mar',
        year: '2018',
    },
     {
        title: 'Relaunch',
        description: 'ATELIER was relaunched with a larger showroom and wider offerings, introducing a fresh approach to luxury living.',
        date: '03',
        month: 'Nov',
        year: '2025',
    },
];

const achievements2 = [
    // {
    //     title: 'Building Center of UAE',
    //     description: 'Giving your home a new style every style. good design for good moments.',
    //     date: '27',
    //     month: 'Nov',
    //     year: '2015',
    // },
];

var bgimg1 = require('./../../images/background/bg-map.png');
var bgimg2 = require('./../../images/background/cross-line2.png');

class Achievements1 extends React.Component {
    render() {
        return (
            <>
                <div
                    className="section-full p-t80 p-b50 sx-bg-secondry bg-no-repeat bg-bottom-center mobile-page-padding"
                    style={{ backgroundImage: 'url(' + bgimg1 + ')' }}
                >
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="sx-separator-outer separator-center">
                                <div
                                    className="sx-separator bg-white bg-moving bg-repeat-x"
                                    style={{ backgroundImage: 'url(' + bgimg2 + ')' }}
                                >
                                    <h3 className="sep-line-one">Our Story So Far</h3>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}

                        <div className="section-content">
                            <div className="parent">
                                <div className="div1">
                                    {achievements1.map((item, index) => (
                                        <div className="sx-box our-story text-white" key={index}>
                                            <div className="mt-media our-story-info d-flex justify-content-start">
                                                <div className="our-story-time">
                                                    <span className="date">{item.date}</span>
                                                    {/* <span className="month">{item.month}</span> */}
                                                </div>
                                                <h4 className="text-uppercase our-story-year">{item.year}</h4>
                                            </div>
                                            <div className="our-story-detail">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="div2">
                                    {achievements2.map((item, index) => (
                                        <div className="sx-box our-story text-white" key={index}>
                                            <div className="mt-media our-story-info d-flex justify-content-start">
                                                <div className="our-story-time">
                                                    <span className="date">{item.date}</span>
                                                    {/* <span className="month">{item.month}</span> */}
                                                </div>
                                                <h4 className="text-uppercase our-story-year">{item.year}</h4>
                                            </div>
                                            <div className="our-story-detail">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* <div className="div3">
                                    <div className="sx-box our-story text-white">
                                        <div className="mt-media our-story-info d-flex justify-content-start">
                                            <div className="our-story-time">
                                                <span className="date">01</span>
                                                <span className="month">Jan</span>
                                            </div>
                                            <h4 className="text-uppercase our-story-year">2020</h4>
                                        </div>
                                        <div className="our-story-detail">
                                            <h4>Extra Achievement</h4>
                                            <p>Placeholder for third grid block</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Achievements1;
