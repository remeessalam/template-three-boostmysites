import { NavLink } from "react-router-dom";

function SectionServices1() {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Our Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Sophisticated Expertise for Rapidly Evolving IT Services and
                Innovative Technology Solutions!
              </h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-our-services-bx">
              <div className="row">
                {/* Block one */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <i className="flaticon-security" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Full Stack Web Development</h4>
                        <p>
                          Your website is the digital face of your business. We
                          specialize in crafting dynamic and responsive websites
                          that drive digital transformation.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/services/Full Stack Web Development"
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Two */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <i className="flaticon-coding" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Mobile App Development</h4>
                        <p>
                          Achieve Mobile Supremacy through Custom App
                          Development Solutions that Combine User- Centric
                          Design, Seamless Functionality, and Sustainable
                          Business Growth.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/services/Mobile App Development"
                            className="site-button-circle active"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Three */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <i className="flaticon-smart-contracts" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">UI/UX</h4>
                        <p>
                          Create engaging user experiences with our expert UX/UI
                          design services. We understand that a well-designed
                          interface is crucial for user satisfaction and
                          engagement.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/services/UI-UX Design"
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center mt-4">
                  <div className="sx-bnr-readmore">
                    <NavLink
                      to="/services"
                      className="site-button sx-btn-primary icon"
                    >
                      <i className="fa  fa-long-arrow-right" />
                      Explore More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionServices1;
