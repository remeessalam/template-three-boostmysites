import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import SectionCounter1 from "../../sections/home/index/section-counter1";
import ItodoImage from "../../elements/itodo-img";
import { useEffect } from "react";
import { allServices, loadScript } from "../../../globals/constants";
import { useParams } from "react-router-dom";

function ServicesDetailPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  const { service } = useParams();

  const data = allServices.find((item) => item.title === service);

  if (!data) {
    return <div>Service not found</div>;
  }

  return (
    <>
      {/* service detail SECTION START */}
      <div className="section-full p-b80 sx-ser-detail-outer sx-bg-white">
        <div className="sx-ser-detail-l-pic p-b80">
          <div className="sx-media  relative ">
            <img
              src={data.bannerImg}
              style={{ width: "100%", height: "75vh", objectFit: "cover" }}
              alt={data.title}
            />
            <div className="sx-bnr-outline-text">
              <h1>AI Solution</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-content">
            <div className="sx-our-service-detail">
              {/* TITLE START */}
              <div className="section-head2">
                <div className="sx-head-s-title">{data.title}</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title2">{data.heading}</h2>
                </div>
              </div>
              {/* TITLE END */}
              <div className="sx-our-service-info m-b80">
                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
              </div>

              <SectionCounter1 />
            </div>
          </div>
        </div>
      </div>
      {/* service detail SECTION END */}

      <SectionVideo2 />
      <SectionClients2 />
    </>
  );
}

export default ServicesDetailPage;
