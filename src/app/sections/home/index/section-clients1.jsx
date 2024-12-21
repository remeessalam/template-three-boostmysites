import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionClients1() {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-bg-primary sx-client-logo-2-outer">
        <div className="container">
          <div className="section-content">
            <div className="large-title-block">
              <div className="section-head">
                <div className="sx-head-l-title">
                  <h2 className="sx-title text-center">Join Our Happy Clients</h2>
                </div>
              </div>
            </div>
            <div className="client-logo-pic2-wrap">
              <div className="row justify-content-center grid-5 ">
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                  <NavLink to="/contact-us" className="client-logo-pic2">
                    <ItodoImage src="images/client-logo/white/1.png" alt="" />
                  </NavLink>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                  <NavLink to="/contact-us" className="client-logo-pic2">
                    <ItodoImage src="images/client-logo/white/2.png" alt="" />
                  </NavLink>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                  <NavLink to="/contact-us" className="client-logo-pic2">
                    <ItodoImage src="images/client-logo/white/3.png" alt="" />
                  </NavLink>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                  <NavLink to="/contact-us" className="client-logo-pic2">
                    <ItodoImage src="images/client-logo/white/4.png" alt="" />
                  </NavLink>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-4">
                  <NavLink to="/contact-us" className="client-logo-pic2">
                    <ItodoImage src="images/client-logo/white/5.png" alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionClients1;
