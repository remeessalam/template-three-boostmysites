import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import { register } from 'swiper/element/bundle';
register();

function SectionSlider2() {
    return (
        <>
            <div className="sx-bnr-2-wrap-outer home-2-slider">
                {/* swiper slides */}
                <swiper-container
                    loop="true"
                    space-between="30"
                    effect="fade"
                    navigation-next-el=".swiper-button-next"
                    navigation-perv-el=".swiper-button-prev"
                    pagination-el=".swiper-pagination"
                    pagination-clickable="true"
                    parallax="true"
                    autoplay-delay="7000"
                    autoplay-disable-on-interaction="true"
                    class="swiper-wrapper"
                >
                    <swiper-slide class="sx-bnr-2-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider2/slide1.jpg")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="sx-bnr-2-content">
                                <span className="sx-bnr-2-small-title">we are The best</span>
                                <h2 className="sx-bnr-2-large-title">Best IT Services provider Our Itodo Companey In Our Country.</h2>
                                <div className="sx-bnr-2-info">Fusce lacinia elit odio, id pulvinar erat placerat vitae. Sed quis aliquet neque. Aenean placerat condimentum lorem non suscipit. Cras tellus tellus, fringilla eu sapien.</div>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/mission" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Free Quote
                                    </NavLink>
                                </div>
                                <div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-images">
                            <ItodoImage src="images/main-slider/slider2/sm-pic1.png" alt=""/>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="sx-bnr-2-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor("images/main-slider/slider2/slide2.jpg")})` }}>
                        <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                        <div className="container">
                            <div className="sx-bnr-2-content">
                                <span className="sx-bnr-2-small-title">We are Dedicated</span>
                                <h2 className="sx-bnr-2-large-title">Delivering IT solutions that enable you to work smarter.</h2>
                                <div className="sx-bnr-2-info">Fusce lacinia elit odio, id pulvinar erat placerat vitae. Sed quis aliquet neque. Aenean placerat condimentum lorem non suscipit. Cras tellus tellus, fringilla eu sapien.</div>
                                <div className="sx-bnr-readmore">
                                    <NavLink to="/about-us" className="site-button sx-btn-primary icon">
                                        <i className="fa  fa-long-arrow-right" />
                                        Read More
                                    </NavLink>
                                </div>
                                <div className="sx-bnr-video">
                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                        <i className="flaticon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-images">
                            <ItodoImage src="images/main-slider/slider2/sm-pic2.png" alt=""/>
                        </div>
                    </swiper-slide>
                </swiper-container>
                {/* !swiper slides */}
                {/* Add Arrows */}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div>
        </>
    )
}

export default SectionSlider2;