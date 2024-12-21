import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";

function SectionCaseStudy2() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-white sx-case-study2-outer">
                <div className="container">
                    {/*Large Title*/}
                    <div className="large-title-block">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                {/* TITLE START */}
                                <div className="section-head left">
                                    <div className="sx-head-s-title">Our Case Study</div>
                                    <div className="sx-head-l-title">
                                        <h2 className="sx-title">Our Itodo IT Solution Special Case Studies.</h2>
                                    </div>
                                </div>
                                {/* TITLE END */}
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className=" large-title-info">
                                    <p>Nunc tempor ultrices iaculis. Cras suscipit odio ut neque interdum, sed faucibus lorem feugiat.
                                        tincidunt tellus quis iaculis interdum. Donec a lobortis arcu. Fusce viverra a dolor quis tincidunt. Pellentesque vitae diam sodales nisl dapibus finibus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-content ">
                    <div className="sx-case-study-bx2-wrap">
                        <div className="row m-b30">
                            {/*One*/}
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study-2/pic-1.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio/detail" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio/detail">
                                            <h2 className="sx-title">IT Solution Business Mokup land</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*two*/}
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 ">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study-2/pic-2.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio/detail" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Branding Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio/detail">
                                            <h2 className="sx-title">Visit Our planned modern farm</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*three*/}
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study-2/pic-3.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio/detail" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio/detail">
                                            <h2 className="sx-title">IT Solution Business Mokup land</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*four*/}
                            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6 ">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study-2/pic-4.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio/detail" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Branding Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio/detail">
                                            <h2 className="sx-title">Visit Our planned modern farm</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*five*/}
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study-2/pic-5.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio/detail" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio/detail">
                                            <h2 className="sx-title">IT Solution Business Mokup land</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/*six*/}
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="sx-case-study-bx2 sx-overlay-effect" style={{ backgroundImage: `url(${publicUrlFor("images/case-study-2/pic-6.jpg")})` }}>
                                    <div className="sx-case-media sx-img-overlay">
                                        <NavLink to="/portfolio/detail" className="sx-case-link"><i className="flaticon-up-right-arrow" /></NavLink>
                                    </div>
                                    <div className="sx-case-info">
                                        <div className="sx-s-title">Apps Design</div>
                                        <NavLink className="sx-l-title" to="/portfolio/detail">
                                            <h2 className="sx-title">IT Solution Business Mokup land</h2>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sx-bnr-readmore text-center">
                            <NavLink to="/portfolio/detail" className="site-button sx-btn-primary icon sx-btn-lg">
                                <i className="fa  fa-long-arrow-right" />
                                View All
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionCaseStudy2;