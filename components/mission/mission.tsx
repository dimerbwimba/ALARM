"use client"
import { useState } from "react";

const Mission = () => {

    const [show, setShow] = useState(1);

    return (
        <div className="why-choose-area overlay py-120">
            {/* <!-- Why Choose Us area start --> */}
            <div className="container">
                <div className="row gap-100 align-items-center">
                    <div className="col-lg-6">
                        <div className="why-choose-content text-white rmb-65">
                            <div className="section-title mb-60">
                                <span className="section-title__subtitle mb-10">ALARM-CONGO</span>
                                <h2>Notre  <span>Engagement</span></h2>
                            </div>
                            <div className="vission-mission-tab">
                                <ul className="nav mb-25" role="tablist">
                                    <li className="nav-item">
                                        <button onClick={()=> setShow(1)} className={`nav-link ${ show == 1 ? "active" : ""} `} data-bs-toggle="tab"
                                            data-bs-target="#mission">Mission</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={()=> setShow(0)} className={`nav-link ${ show != 1 ? "active" : ""}`} data-bs-toggle="tab"
                                            data-bs-target="#vission">Vission</button>
                                    </li>

                                </ul>
                                <div className="tab-content">
                                    
                                       { show == 1 && <div className="t">
                                                La vision d’ALARM-CONGO est de voir une Afrique sans conflits tribaux et religieux violents. 
                                                Nous aspirons à un continent où la paix, 
                                                la compréhension mutuelle et la réconciliation prévalent.</div>}
                                          
                                       { show == 0 && <div className={""}>
                                        La mission d’ALARM-CONGO est de développer les leaders serviteurs au sein de 
                                        l’Église et de la communauté africaine. Nous formons 
                                        des leaders capables de réconcilier et de transformer les vies touchées par 
                                        les conflits et l’injustice.</div>}
                                  

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="why-choose-video">
                            <div className="video rel">
                                <img src="https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/02988642-6935-41ed-b004-ad8938a1d650.JPG" alt="Video" />
                                <a className="video-play video-play--one" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                                    data-effect="mfp-zoom-in"><i className="fa fa-play"></i></a>
                            </div>
                            <img className="leaf-shape top_image_bounce" src="assets/img/shapes/three-round-green.png"
                                alt="Shape" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Why Choose Us area end --> */}
        </div>
    )
}

export default Mission;