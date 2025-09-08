import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import Projects7 from './../Elements/Projects7';
import ReactPlayer from 'react-player';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/tile.webp');

class Tiles extends React.Component {
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
                    <div className="project-detail-outer row">
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="project-detail-pic m-b30">
            <div className="sx-media">
                <img src={require('./../../images/projects/square/pic1.webp')} alt="" />
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="project-detail-pic m-b30">
            <div className="sx-media">
                <img src={require('./../../images/projects/square/pic2.webp')} alt="" />
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="project-detail-pic m-b30">
            <div className="sx-media">
                <img src={require('./../../images/projects/square/pic3.webp')} alt="" />
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="project-detail-pic m-b30">
            <div className="sx-media">
                <img src={require('./../../images/projects/square/pic4.webp')} alt="" />
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="project-detail-pic m-b30">
            <div className="sx-media">
                <img src={require('./../../images/projects/square/pic5.webp')} alt="" />
            </div>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="project-detail-pic m-b30">
            <div className="sx-media">
                <img src={require('./../../images/projects/square/pic6.webp')} alt="" />
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

export default Tiles;