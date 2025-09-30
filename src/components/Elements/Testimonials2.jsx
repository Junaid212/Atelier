import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        reviewername: 'Nikhil Raj',
        review: 'They have good collection for tiles, bathroom/ kitchen fittngs, sanitaryware etc. Rate is also comparatively cheaper than other similar shops in mangalore. Good amount of parking space also available in front of the store and even on the road side.',
        stars: 5
    },
    {
        reviewername: 'Thrupthi Trupsy',
        review: 'It is an exclusive showroom for Bathrooms, Indoor Outdoor surfaces, harmonized kitchens, Wellness, Wooden Flooring, Roofing, Sports Surface, Detailed Accessories.. Staffs are good and friendly in detail explanation about the product will be given. Whole set up is so well maintained and exhibited, Their collections are of latest brand and technology.',
        stars: 5
    },
    {
        reviewername: 'Harish Chalil',
        review: 'All items in related to furnishing and beautification of home with world class standard are available. Display and showroom is excellently planned and standardized. Very knowledgeable customer friendly people at the counter. Excellent.',
        stars: 5
    },
    {
        reviewername: 'Dr C P Abdulla Yasser',
        review: 'A very good place for sanitary fixtures and tiles. They have a wide variety of products and also a big catalogue of them. If you find something nice, you can ask them to get it',
        stars: 5
    }
]

var bgimg1 = require('./../../images/background/bg6.jpg');
var bgimg2 = require('./../../images/background/cross-line2.png');

class Testimonials2 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };

        // Function to render stars based on rating
        const renderStars = (rating) => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars.push(<span key={i} className="fa fa-star" style={{color: '#ffc107'}} />);
                } else {
                    stars.push(<span key={i} className="fa fa-star" style={{color: '#e0e0e0'}} />);
                }
            }
            return stars;
        };

        return (
            <>
                <div className="section-full mobile-page-padding bg-repeat p-t80 p-b80" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className={`${this.props.separatoralignment} sx-separator-outer`}>
                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                        <h3 className="sep-line-one">Testimonial</h3>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home-two owl-btn-vertical-center" {...options}>
                                {testimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="testimonial-1 hover-animation-1 bg-gray testimonial-card">
                                            <div className="testimonial-detail clearfix">
                                                <h4 className="testimonial-name">{item.reviewername}</h4>
                                                <div className="testimonial-stars">
                                                    {renderStars(item.stars)}
                                                </div>
                                                <span className="fa fa-quote-right" />
                                            </div>
                                            <div className="testimonial-text">
                                                <p>{item.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel>
                        </div>
                    </div>
                    <style>{`
                    .testimonial-card {
                        display: flex;
                        flex-direction: column;
                        height: 350px; /* Fixed height for all cards */
                        position: relative;
                    }

                    .testimonial-detail {
                        flex-shrink: 0;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                        position: relative;
                    }

                    .testimonial-name {
                        margin-top: 0;
                        margin-bottom: 10px;
                        text-align: center;
                    }

                    .testimonial-stars {
                        margin-bottom: 10px;
                        text-align: center;
                    }

                    .testimonial-stars .fa-star {
                        margin: 0 2px;
                        font-size: 16px;
                    }

                    .testimonial-text {
                        flex-grow: 1;
                        display: flex;
                        align-items: center; /* Center vertically */
                        justify-content: center; /* Center horizontally */
                        text-align: center;
                        padding: 20px 0;
                    }

                    .testimonial-text p {
                        margin: 0;
                        width: 100%;
                        line-height: 1.6;
                    }

                    .fa-quote-right {
                        position: absolute;
                        top: 0;
                        right: 15px;
                        color: #e0e0e0;
                        font-size: 20px;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .testimonial-card {
                            height: 300px;
                        }
                        
                        .testimonial-text {
                            padding: 15px 0;
                        }
                        
                        .testimonial-text p {
                            font-size: 14px;
                            line-height: 1.5;
                        }
                    }
                    `}</style>
                </div>
            </>
        );
    }
};

export default Testimonials2;