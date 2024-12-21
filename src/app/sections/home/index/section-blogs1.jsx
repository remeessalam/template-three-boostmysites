import { whyChooseUs } from "../../../../globals/constants";

function SectionBlogs1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-bg-white sx-latest-blog-outer wow fadeInDown"
        data-wow-duration="1000ms"
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            {/* <div className="sx-head-s-title">Our Blogs</div> */}
            <div className="sx-head-l-title">
              <h2 className="sx-title">Why Choose [company name]</h2>
              <p>{whyChooseUs.mainHeading}</p>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="owl-carousel sx-latest-blog-1-carousel m-b30">
              {/*One block*/}
              {whyChooseUs.details.map((obj, i) => (
                <div key={obj.heading} className="item">
                  <div className="whychoose sx-latest-post-st-1 ">
                    <div className="sx-post-media sx-img-effect img-reflection">
                      <img src={obj.image} className="chooseusimage" alt="" />
                    </div>
                    <div className="sx-post-info p-t30">
                      <div className="sx-post-title ">
                        <h4 className="post-title">
                          {/* <NavLink to="/blogs/detail"> */}
                          {obj.heading}
                          {/* </NavLink> */}
                        </h4>
                      </div>
                      <div className="sx-post-meta ">
                        <p>{obj.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionBlogs1;
