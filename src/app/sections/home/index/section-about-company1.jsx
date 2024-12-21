import ItodoImage from "../../../elements/itodo-img";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany1() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      {/* <div className="sx-ab-img-section-1-wrap">
                                                <div className="sx-ab-video">
                                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                                        <i className="flaticon-play" />
                                                    </a>
                                                </div>
                                                <div className="sx-ab-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/left-pic.png")})` }} />
                                            </div> */}
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Welcome to [company name]</h2>
                    {/* <span className="sx-title-2">Nullam vel ligula lorem. Phasellus neque Etiam nequeretium.</span> */}
                    <p>
                      At [company name], we take immense pride in delivering
                      top-notch digital solutions that cater to the evolving
                      needs of today’s dynamic business environment. We are
                      passionate about innovation, creativity, and excellence,
                      and these principles guide every project we undertake. As
                      a trusted technology partner, we are dedicated to
                      transforming your bold ideas into reality through
                      cutting-edge technology and innovative digital strategies.
                      Our core expertise spans across Web Development, App
                      Development, UX/UI Design, Chatbot Development, Machine
                      Learning Solutions, and Game Development—empowering
                      businesses to not just survive but to thrive and grow in
                      the fast-paced, competitive digital landscape.
                    </p>
                    <div className="progress">
                      <div
                        className="progress-bar sx-bg-primary"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>95.00% Work Success</span>
                      </div>
                    </div>
                    {/* <div className="row sx-about-bx1-column">
                      <div className="col-lg-6 col-md-6">
                        <p>
                          Proin lobortis mauris vel dui egestas,non laoreet
                          duolei hendrerit.
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <p>
                          Fusce maximus turpis in magna cursus, vehicula
                          bibendum sem placerat.
                        </p>
                      </div>
                    </div> */}
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-mouse" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Solution
                            </span>
                            {/* <span className="sx-icon-bx-title-info">
                              02 Project
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-download" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Consultant
                            </span>
                            {/* <span className="sx-icon-bx-title-info">
                              04 Project
                            </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COUNTER START */}
            <SectionCounter1 />
            {/* COUNTER  END */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany1;
