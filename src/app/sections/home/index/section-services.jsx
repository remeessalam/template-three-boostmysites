import { NavLink } from "react-router-dom";
import { allServices, publicUrlFor } from "../../../../globals/constants";

function Services() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
        style={{
          backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})`,
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">our Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">What We Offer</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row">
                {allServices.map((obj, i) => (
                  <div
                    key={obj.heading}
                    className="col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-icon-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-icon-bx-icon ">
                          <span className="sx-text-primary">{obj.image}</span>
                        </div>
                        <div className="icon-content">
                          <NavLink to={`/services/${obj.title}`}>
                            <h4 className="sx-tilte">{obj.title}</h4>
                          </NavLink>
                          <p>{obj.shortDesc}</p>
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

export default Services;
