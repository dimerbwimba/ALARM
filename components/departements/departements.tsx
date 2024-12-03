import Link from "next/link";
import DrcFlagBorderSingle from "../design-utils/drc-flag-color-border";

const Departements = () => {
    return (
        <div className="our-causes-three bgc-black pt-120 pb-90 rel z-1">
            {/* <!-- Our Causes area start --> */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="section-title text-center text-white mb-55">
                            <span className="section-title__subtitle mb-10">ALARM CONGO</span>
                            <h2>Nos  <span>Departements</span></h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati
                                consectetur adipisicing</p> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="cause-three-item item--green">
                            <div className="image">
                                <img src="https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/eda297ce-50a2-4e70-84ef-ee19e10be5e2.JPG" alt="Cause" />
                                <div className="skillbar" data-percent="50">
                                    <span className="skill-bar-percent" style={{ left: '50%' }}></span>
                                    <DrcFlagBorderSingle n={"one"} />
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/departements">Reconcilier les relations</Link></h4>
                                <div className="cause-btn">
                                    <Link className="btn" href="/departements">Lire plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="cause-three-item item--yellow">
                            <div className="image">
                                <img src="https://i.ibb.co/ggzBT52/IMG-1827-compressed.jpg" alt="Cause" />
                                <div className="skillbar" data-percent="70">
                                    <span className="skill-bar-percent" style={{ left: '70%' }}></span>
                                    <DrcFlagBorderSingle n={"two"} />
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/departements">Transformation des communautés</Link></h4>

                                <div className="cause-btn">
                                    <Link className="btn" href="/departements">Lire plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="cause-three-item">
                            <div className="image">
                                <img src="https://i.ibb.co/Fq3dkby/IMG-1288-min-compressed.jpg" alt="Cause" />
                                <div className="skillbar" data-percent="80">
                                    <span className="skill-bar-percent" style={{ left: "80%;" }}></span>
                                    <DrcFlagBorderSingle n={"three"} />
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link  href="/departements">Leadership <br /> Serviteur</Link></h4>

                                <div className="cause-btn">
                                    <Link className="btn" href="/departements">Lire plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="cta-area-shapes">
                <img className="one" src="assets/img/valunteer/valunteer-bg.png" alt="Shape" />
                <img className="two" src="assets/img/valunteer/valunteer-bg2.png" alt="Shape" />
            </div>
            <div className="our-cause-shapes">
                <img className="one top_image_bounce" src="assets/img/shapes/three-round-green.png" alt="Shape" />
            </div>
            {/* <!-- Our Causes area end --> */}
        </div>
    )
}

export default Departements;