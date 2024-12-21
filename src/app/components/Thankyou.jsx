import { NavLink } from "react-router-dom";

function Thankyou() {
  return (
    <>
      {/* Contact us START */}
      <div className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
        <div className="container">
          <div className="section-content">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 text-center m-b30">
                <div className="contact-info">
                  <div className="section-head left">
                    {/* <div className="sx-head-s-title">Form Submitted</div> */}
                    <div className="sx-head-l-title">
                      <h2 className="sx-title mb-2">Thank You!</h2>
                      <p>
                        Thank you for contacting us, one of our associates will
                        get in touch with you soon!
                      </p>
                      <NavLink
                        to="/"
                        className="site-button sx-btn-primary icon"
                      >
                        Home Page
                      </NavLink>
                    </div>
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

export default Thankyou;
