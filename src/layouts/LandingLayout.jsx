import LandingHeader from "../app/sections/common/LandingHeader";
import Footer from "../app/sections/common/footer";
import LandingRoutes from "../routing/landing-routes";

function RootLandingLayout({ setLoading }) {
  return (
    <>
      <div className="page-wraper">
        <LandingHeader />

        <div className="page-content">
          <LandingRoutes setLoading={setLoading} />
        </div>

        <Footer />
        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
}

export default RootLandingLayout;
