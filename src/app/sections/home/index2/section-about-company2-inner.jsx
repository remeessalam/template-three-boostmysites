import ItodoImage from "../../../elements/itodo-img";

function SectionAboutCompany2Inner() {
    return (
        <>
            <div className="sx-about-bx3-content-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-media">
                            <div className="sx-dot-bx1"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-dot-bx2"><ItodoImage src="images/about/dotted-pic2.png" alt="image" /></div>
                            <div className="sx-ab3-img-outer">
                                <div className="sx-ab3-media">
                                    <ItodoImage src="images/about/p2.jpg" alt="media" />
                                </div>
                            </div>
                            <div className="sx-ab-circle-box">
                                <div className="sx-ab-circle-box-content">
                                    <span className="sx-exp">10 Years Experience</span>
                                    <div className="sx-exp-title-outer">
                                        <span className="sx-exp-title-1">It</span>
                                        <span className="sx-exp-title-2">Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx3-content">
                            <h2 className="sx-title">That's why we're on list of favorite.</h2>
                            <span className="sx-title-2">Nam eu leo nec diam efficitur aliquet lacinia tellus locusstome.</span>
                            <p>Fusce eu eros nec felis venenatis fermentum sit amet eget turpis. Integer tempus massa ac arcu sollicitudin sollicitudin Vivamus neque urna, iaculis et orci id, euismod tempor arcu semper con  nulla amet finibus currepet of our massing to learn.</p>
                            <p>Integer tempus massa ac arcu sollicitudin sollicitudin Vivamus neque urna, iaculis et orci id, euis tempor arcu semper congue nulla amet finibus currepet of our massing to learn.</p>
                            <div className="row sx-about-icon-bx3-column">
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-incoming-call" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contact Phone</span>
                                            <span className="sx-icon-bx-title">+55 (9900) 666 22</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="sx-icon-bx-3">
                                        <div className="sx-media">
                                            <i className="flaticon-email-1" />
                                        </div>
                                        <div className="sx-icon-bx-info">
                                            <span className="sx-icon-bx-title-info">Contact Mail</span>
                                            <span className="sx-icon-bx-title">info.Itodo@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hilite-title text-left p-l50 text-uppercase">
                <strong>About Us</strong>
            </div>
        </>
    )
}

export default SectionAboutCompany2Inner;