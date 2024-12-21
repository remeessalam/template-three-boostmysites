import Banner from "../../sections/common/banner";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionAboutCompany3 from "../../sections/company/why-choose-us/section-about-company3";
import SectionVideo1 from "../../sections/home/index/section-video1";
import Services from "../../sections/home/index/section-services";
import SectionTeam1 from "../../sections/home/index2/section-team1";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function WhyChooseUsPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.whychooseus} />
            <SectionServices1 />
            <SectionAboutCompany3 />
            <SectionVideo1 />
            <Services />
            <SectionTeam1 />
        </>
    )
}

export default WhyChooseUsPage;