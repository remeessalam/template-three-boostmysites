import { Link, NavLink, useLocation } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { allServices, loadScript, logo } from "../../../globals/constants";
import { useEffect } from "react";
import ThemeToggleBtn from "./toggleColor";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

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
                to="/"
                className="logo-header"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <div className="logo-header-inner logo-header-one"> */}
                <img src={logo} alt="Logo" className="header-logo-main" />
                {/* </div> */}
              </Link>
              {/* NAV Toggle Button */}
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
              {/* EXTRA NAV  social media link*/}
              {/* <div className="extra-nav">
                <div className="extra-cell">
                  <ul className="list-unstyled social-bx d-flex flex-wrap align-content-center">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="feather-facebook" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="feather-twitter" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="feather-linkedin" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="feather-instagram" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* EXTRA Nav */}
              {/* MAIN NAVIGATION */}
              <div className="header-nav navbar-collapse collapse d-flex justify-content-end collapse ">
                <ul className=" nav navbar-nav ">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <NavLink onClick={() => setIsActive(false)} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/services" ? "active" : ""
                    }
                  >
                    <NavLink onClick={() => setIsActive(false)} to="/services">
                      Services
                    </NavLink>
                    <ul className="sub-menu">
                      {allServices.map((service) => (
                        <li key={service.title}>
                          <NavLink
                            onClick={() => setIsActive(false)}
                            to={`/services/${service.title}`}
                          >
                            {service.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li
                    className={
                      location.pathname === "/about-us" ? "active" : ""
                    }
                  >
                    <NavLink onClick={() => setIsActive(false)} to="/about-us">
                      About us
                    </NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/contact-us" ? "active" : ""
                    }
                  >
                    <NavLink
                      onClick={() => setIsActive(false)}
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
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

export default Header;
