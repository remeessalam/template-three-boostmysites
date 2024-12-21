import React, { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import JoinHappyCustomers from "../../sections/common/JoinHappyCustomers";
import GameComponent from "../../sections/home/index/DinoGame/game";
const SectionSlider1 = React.lazy(() =>
  import("../../sections/home/index/section-slider1")
);
const SectionServices1 = React.lazy(() =>
  import("../../sections/home/index/section-services1")
);
const SectionAboutCompany1 = React.lazy(() =>
  import("../../sections/home/index/section-about-company1")
);
const SectionVideo1 = React.lazy(() =>
  import("../../sections/home/index/section-video1")
);
const SectionClients1 = React.lazy(() =>
  import("../../sections/home/index/section-clients1")
);
const SectionCaseStudy1 = React.lazy(() =>
  import("../../sections/home/index/section-case-study1")
);
const SectionBlogs1 = React.lazy(() =>
  import("../../sections/home/index/section-blogs1")
);

function Home() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <SectionSlider1 />
      <GameComponent />
      <SectionServices1 />
      <SectionAboutCompany1 />
      <SectionVideo1 />
      <SectionBlogs1 />
      {/* <SectionClients1 /> */}
      <JoinHappyCustomers />
      <SectionCaseStudy1 />
      <SectionBlogs1 />
    </>
  );
}

export default Home;
