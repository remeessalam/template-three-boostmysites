import Footer from "../app/sections/common/footer";
import Header from "../app/sections/common/header";
import AppRoutes from "../routing/app-routes";

function RootLayout({ setLoading }) {
  return (
    <>
      <div className="page-wraper">
        <Header />

        <div className="page-content">
          <AppRoutes setLoading={setLoading} />
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

export default RootLayout;
