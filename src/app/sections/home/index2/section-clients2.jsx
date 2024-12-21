import { clientLogos } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionClients2({ hideTitle }) {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-client-logo-1-outer sx-bg-white">
        <div className="container">
          {/* TITLE START */}
          {(hideTitle === undefined || hideTitle === null || !hideTitle) && (
            <div className="section-head center max-900">
              <div className="sx-head-s-title">Our Clients</div>
              <div className="sx-head-l-title">
                <h2 className="sx-title2">
                  Our 100+ happy users around worldwide.
                </h2>
              </div>
            </div>
          )}

          {/* TITLE END */}
          <div className="section-content">
            <div className="client-grid m-b30">
              <div className="row justify-content-center">
                {clientLogos.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="client-logo-pic bg-white">
                      <img src={item.img} alt="" />
                      {/* <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div> */}
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

export default SectionClients2;
