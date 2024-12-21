import { NavLink } from "react-router-dom";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../../../globals/constants";

function LandingPageServices({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");

  const services = isWebDevelopment
    ? webDevelopmentServices
    : appDevelopmentServices;
  return (
    <>
      <div id="services" className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light">
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
                {services.map((service) => (
                  <div
                    key={service.heading}
                    className="col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-service-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-service-bx-icon scale-in-center">
                          <span className="sx-text-primary">
                            {service.image}
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="sx-tilte">{service.heading}</h4>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageServices;
