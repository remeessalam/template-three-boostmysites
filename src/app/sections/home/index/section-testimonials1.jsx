const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    designation: "CEO of TechNext Solutions",
    review:
      "[company name] transformed the way we handle our data analytics. Their AI and machine learning solutions have not only improved our efficiency but also provided us with deep insights that we never had before. Their team is professional, responsive, and innovative.",
  },
  {
    id: 2,
    name: "Mark Davis",
    designation: "COO of E-Commerce Hub",
    review:
      "We partnered with [company name] for custom web and mobile app development, and they exceeded our expectations. Their attention to detail, creativity, and commitment to delivering on time was remarkable. The app is user-friendly and has significantly improved our customer engagement.",
  },
  {
    id: 3,
    name: "David Thompson",
    designation: "HR Director at HealthCare Innovators",
    review:
      "Our collaboration with [company name] on VR development has opened new doors for our training programs. Their VR simulations are incredibly realistic and have helped us provide more effective and engaging training sessions for our employees.",
  },
];

function SectionTestimonials1() {
  return (
    <>
      <div className="sx-testimonial-bx-1">
        <div className="large-title-block">
          <div className="row text-center">
            <div className="section-head">
              <div className="sx-head-s-title">Testimonials</div>
              <div className="sx-head-l-title">
                <h2 className="sx-title">What Our Clients Say About Us</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel testimonial-2-wrap owl-btn-vertical-center">
          {testimonials.map((obj, i) => (
            <div className="item" key={i}>
              <div className="testimonial-2  hover-animation-1">
                <div className="testimonial-text">
                  <span className="testimonial-quote sx-text-primary">
                    <i className="flaticon-quote" />
                  </span>
                  <p>{obj.review}</p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-user-info">
                    <h4 className="testimonial-name">{obj.name}</h4>
                    <span className="testimonial-position">
                      {obj.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionTestimonials1;
