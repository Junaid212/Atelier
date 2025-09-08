import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Projects7 from './../Elements/Projects7';
import ReactPlayer from 'react-player';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/kw.webp');

class KitchenWardrobe extends React.Component {
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
                    <Banner title="Luxury for Every Corner of Your Home" pagename="Products" description="Step into ATELIER and explore 6 curated categories featuring over 50 premium international brands. From bathrooms and kitchens to flooring, wellness, and home accessories, each product is designed to bring elegance, style, and comfort seamlessly into your living space." bgimage={bnrimg} />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding stick_in_parent">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="project-detail-outer row">
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic8.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic9.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic10.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic7.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic2.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-detail-pic m-b30">
                                                <div className="sx-media">
                                                    <img src={require('./../../images/projects/square/pic3.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div className="sx-box">
                                                <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                    <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt="" />
                                                    <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12  sticky_column">
                                    <div className="project-detail-containt-2">
                                        <div className="bg-white text-black p-a20 shadow">
                                            <div className="product-block bg-gray p-a30 m-b30">
                                                <ul>
                                                    <li>
                                                        <img src={require('./../../images/client-logo/Kajaria.png')} alt="Logo" style={{width:'90px'}}/>
                                                        <p> Würfel Küche</p>
                                                    </li>
                                                    {/* <li>
                                                        <img src={require('./../../images/client-logo/Kajaria.png')} alt="Logo" style={{width:'90px'}}/>
                                                        <p>Simpol</p>
                                                    </li>
                                                    <li>
                                                        <img src={require('./../../images/client-logo/Kajaria.png')} alt="Logo" style={{width:'90px'}}/>
                                                        <p>Caesar</p>
                                                    </li>
                                                    <li>
                                                        <img src={require('./../../images/client-logo/Kajaria.png')} alt="Logo" style={{width:'90px'}}/>
                                                        <p>Kajaria</p>
                                                    </li>
                                                    <li>
                                                        <img src={require('./../../images/client-logo/Kajaria.png')} alt="Logo" style={{width:'90px'}}/>
                                                        <p>Icon Tiles</p>
                                                    </li> */}
                                                </ul>
                                            </div>
                                            {/* <h4>Landscape plans for drainage problems may also entail planting beds away from the home’s foundation.</h4> */}
                                            <p>Create functional and stylish spaces with expertly designed kitchens and wardrobes. Our collection brings smart storage, modern aesthetics, and high-quality craftsmanship together to make every corner of your home both elegant and practical.</p>
                                            <div className="m-b0">
                                                <div className="sx-divider divider-1px  bg-black"><i className="icon-dot c-square" /></div>
                                            </div>
                                            <ul className="social-icons social-square social-darkest m-b0">
                                                <li><a href="https://www.facebook.com" target="_blank" className="fa fa-facebook" /></li>
                                                <li><a href="https://twitter.com" target="_blank" className="fa fa-twitter" /></li>
                                                <li><a href="https://in.linkedin.com" target="_blank" className="fa fa-linkedin" /></li>
                                                {/* <li><a href="https://rss.com" target="_blank" className="fa fa-rss" /></li> */}
                                                <li><a href="https://www.youtube.com" target="_blank" className="fa fa-youtube" /></li>
                                                <li><a href="https://www.instagram.com" target="_blank" className="fa fa-instagram" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                    <Projects7 />
                </div>

                <div className="modal fade" id="myModal2" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=Oy2QIiSQT2U' />
                        </div>
                    </div>
                </div>
                <Footer2 />
            </>
        );
    };
};

export default KitchenWardrobe;