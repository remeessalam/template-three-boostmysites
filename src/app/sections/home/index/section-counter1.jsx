import CountUp from "react-countup";

function SectionCounter1() {
  return (
    <>
      <div className="counter-blocks">
        <div className="row when-item-four">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before"></span>
                <span className="counter">
                  <CountUp end={3} duration={10} />
                </span>
                <span className="sx-cont-after">+</span>
              </h2>
              <div className="sx-count-info">Years of Experience</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before"></span>
                <span className="counter">
                  <CountUp end={10} duration={10} />
                </span>
                <span className="sx-cont-after">+</span>
              </h2>
              <div className="sx-count-info">Expert Team</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before"></span>
                <span className="counter">
                  <CountUp end={100} duration={4} />
                </span>
                <span className="sx-cont-after">%</span>
              </h2>
              <div className="sx-count-info">On Time Completion</div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="sx-count">
              <h2 className="sx-title">
                <span className="sx-cont-before"></span>
                <span className="counter">
                  <CountUp end={95} duration={4} />
                </span>
                <span className="sx-cont-after">+</span>
              </h2>
              <div className="sx-count-info">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCounter1;
