import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionOurInfo1() {
    return (
        <>
            <div className="sx-mv-bx1-content-wrap">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-about-bx1-content">
                            <h2 className="sx-title">That's why we're list of favorites.</h2>
                            <span className="sx-title-2">Nullam vel ligula lorem. Phasellus neque Etiam nequeretium.</span>
                            <p>There are many variations of passage of Lorem Ipsum all item available, but the majority have suffered alteration in some form injected humour Nullam.</p>
                            <div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="sx-mv-bx1-media">
                            <div className="sx-dot-bx-right"><ItodoImage src="images/about/dotted-pic.png" alt="image" /></div>
                            <div className="sx-mv-img-outer">
                                <div className="sx-mv-img-section-2">
                                    <ItodoImage src="images/about/p1-1.jpg" alt="image" />
                                </div>
                                <div className="sx-mv-img-section-1-wrap">
                                    <div className="sx-mv-video">
                                        <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                            <i className="flaticon-play" />
                                        </a>
                                    </div>
                                    <div className="sx-mv-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/right-pic.jpg")})` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionOurInfo1;