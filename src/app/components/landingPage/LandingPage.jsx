import React from "react";
const BannerSliderLandingPage = React.lazy(() => import("./components/BannerSliderLandingPage"));
const LandingPageServices = React.lazy(() => import("./components/LandingPageServices"));
const AboutSectionLandingPage = React.lazy(() => import("./components/AboutSectionLandingPage"));
const InquiryForm = React.lazy(() => import("../../sections/common/InquiryForm"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const ContactForm = React.lazy(() => import("../../sections/common/ContactForm"));

const LandingPage = ({ page, setLoading }) => {
  return (
    <>
      <BannerSliderLandingPage page={page} />
      <InquiryForm setLoading={setLoading}/>
      <LandingPageServices page={page} />
      <AboutSectionLandingPage page={page} />
      <Portfolio page={page} />
      <ContactForm setLoading={setLoading} />
    </>
  );
};

export default LandingPage;
