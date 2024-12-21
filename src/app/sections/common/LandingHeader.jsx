import { NavLink } from "react-router-dom";
import { useState } from "react";
import { loadScript, logo } from "../../../globals/constants";
import { useEffect } from "react";
import { Link } from "react-scroll";
// import logo from "../../../assets/images/Logo/logo.png";
function LandingHeader() {
  const [isActive, setIsActive] = useState(false);
  function toggleNavClass() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    loadScript("js/mobilenav.js");
  });

  return (
    <>
      <header
        className={
          "header-style1 site-header  mobile-sider-drawer-menu " +
          (isActive ? "active" : "")
        }
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              <Link
                to="banner"
                className="logo-header"
                style={{ cursor: "pointer" }}
              >
                <img src={logo} alt="Logo" className="header-logo-main" />
              </Link>
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                className="navbar-toggler collapsed"
                onClick={toggleNavClass}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>

              {/* MAIN NAVIGATION */}
              <div className="header-nav navbar-collapse collapse d-flex justify-content-end collapse ">
                <ul className=" nav navbar-nav ">
                  <li>
                    <Link
                      to="banner"
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      onClick={() => setIsActive(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="services"
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      onClick={() => setIsActive(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      onClick={() => setIsActive(false)}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="portfolio"
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      onClick={() => setIsActive(false)}
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="contact"
                      smooth
                      duration={500}
                      spy
                      activeClass="active"
                      onClick={() => setIsActive(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default LandingHeader;
