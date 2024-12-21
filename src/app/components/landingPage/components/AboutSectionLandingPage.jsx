import web from "../../../../assets/images/landingaboutweb.jpg";
import app from "../../../../assets/images/landingaboutapp.jpg";
import ItodoImage from "../../../elements/itodo-img";

function AboutSectionLandingPage({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");
  return (
    <>
      <div id="about" className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      {isWebDevelopment
                        ? "Your Trusted Partner for Exceptional Web Design"
                        : "Your Expert Partner for App Development"}
                    </h2>
                    <p>
                      {isWebDevelopment
                        ? "With a passion for clean, modern, and functional design, I specialize in creating customized websites that align with your brand's identity and goals. Whether you're a startup or an established business, I turn your ideas into reality."
                        : 'A concise introduction highlighting your expertise in app development. Example: "With extensive experience in creating custom mobile and web applications, I help businesses turn their innovative concepts into user-friendly, high-quality digital solutions. From startups to established companies, I bring your vision to life with robust and scalable technology.'}
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img
                          loading="lazy"
                          src={isWebDevelopment ? web : app}
                          alt="our solution"
                        />
                      </div>
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

export default AboutSectionLandingPage;
