import {
  appPortfolio,
  publicUrlFor,
  webPortfolio,
} from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function Portfolio({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = page === "web-development" ? webPortfolio : appPortfolio;
  return (
    <>
      <div
        id="portfolio"
        className="section-full p-t110 p-b80"
        style={{
          backgroundImage: `url(${publicUrlFor(
            "images/services/bg-img.webp"
          )})`,
        }}
      >
        <div className="container">
          {/*Large Title*/}
          <div className="large-title-block sx-all-white">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* TITLE START */}
                <div className="section-head left">
                  <div className="sx-head-s-title">Portfolio</div>
                  <div className="sx-head-l-title">
                    <h2 className="sx-title" style={{ color: "#fff" }}>
                      {isWebDevelopment
                        ? "Showcasing My Work"
                        : "Apps That Make a Difference"}
                    </h2>
                  </div>
                </div>
                {/* TITLE END */}
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="portfolio_grid">
              {portfolio.map(({ title, img }) => (
                <div key={title} className="item">
                  <div className="sx-service-bx-2">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-img-bx">
                        <span className="sx-img-bx-media">
                          <img src={img} alt={title} />
                        </span>
                        <div className="p-2 position-relative z-4">
                          <p className="sx-why-ch-category">{title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
