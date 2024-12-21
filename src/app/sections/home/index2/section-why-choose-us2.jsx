import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import SectionTestimonials2 from "./section-testimonials2";

export function SectionWhyChooseUs2Inner() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx4-media">
                        <div className="sx-ab4-img-outer">
                            <div className="sx-ab4-media">
                                <ItodoImage src="images/about/p3.jpg" alt="media" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx4-content">
                        <h2 className="sx-title">Why Choose Us to Join Our Work?</h2>
                        <p>Nulla facilisi. Nullam congue, tortor id finibus posuere, risus magna convallis massa, sit amet gr est tellus vitae dui. Proin hendrerit diam a commodo aliquam. In vitae interdum odio. Duis sitam nisl eget odio facilisis lacinia.</p>
                        <ul className="sx-arrow-circle-checked">
                            <li>One-time security check fee: $99.95</li>
                            <li>Elite membership fee: $999.95 per month</li>
                            <li>Coast-to-coast domestic flights: from $3,799.95</li>
                        </ul>
                        <NavLink to="/why-choose-us" className="site-button sx-btn-primary icon sx-btn-lg">
                            <i className="fa  fa-long-arrow-right" />
                            View All
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

function SectionWhyChooseUs2() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx4-content-wrap p-b70">
                            <SectionWhyChooseUs2Inner />
                        </div>
                        {/*testimonial section */}
                        <SectionTestimonials2 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWhyChooseUs2;