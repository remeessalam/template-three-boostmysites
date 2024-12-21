import React from "react";
import { Route, Routes } from "react-router-dom";
// import FAQPage from "../app/components/company/faq";
// import GalleryPage from "../app/components/company/gallery";
// import IconsPage from "../app/components/company/icons";
// import PricingPage from "../app/components/company/pricing";
// import TeamPage from "../app/components/company/team";
// import TestimonialsPage from "../app/components/company/testimonials";
// import WhyChooseUsPage from "../app/components/company/why-choose-us";
// import MissionVisionPage from "../app/components/IT solutions/mission-vision";
// import Portfolio1Page from "../app/components/IT solutions/portfolio/portfolio1";
// import Portfolio2Page from "../app/components/IT solutions/portfolio/portfolio2";
// import PortfolioDetailPage from "../app/components/IT solutions/portfolio/detail";
// import BlogGridPage from "../app/components/IT blogs/blog-grid";
// import BlogListSidebarPage from "../app/components/IT blogs/blog-list-sidebar";
// import BlogDetailPage from "../app/components/IT blogs/blog-detail";
// import BlogDetailSidebarPage from "../app/components/IT blogs/blog-detail-sidebar";
// import AboutUsPage from "../app/components/about-us";
// import ServicesPage from "../app/components/services/services";
// import ServicesDetailPage from "../app/components/services/detail";
// import ContactUsPage from "../app/components/contactus/contact-us";
// import Home from "../app/components/home/Home";
// import Thankyou from "../app/components/Thankyou";

const AboutUsPage = React.lazy(() => import("../app/components/about-us"));
const ServicesPage = React.lazy(() => import("../app/components/services/services"));
const ServicesDetailPage = React.lazy(() =>
  import("../app/components/services/detail")
);
const ContactUsPage = React.lazy(() =>
  import("../app/components/contactus/contact-us")
);
const Home = React.lazy(() => import("../app/components/home/Home"));
const Thankyou = React.lazy(() => import("../app/components/Thankyou"));

function AppRoutes({ setLoading }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:service" element={<ServicesDetailPage />} />
        <Route
          path="/contact-us"
          element={<ContactUsPage setLoading={setLoading} />}
        />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
