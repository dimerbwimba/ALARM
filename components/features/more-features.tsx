import SimpleSliderResponsive from "../slider/SliderSimple";

const MoreFeautures = () => {
    return (
        <div className="about-area py-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-part">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="image">
                                        <img src="https://i.ibb.co/RTP3TJ1/Untitled-design-1-compressed.jpg" alt="About" />
                                    </div>
                                    <div className="project-complete mb-30">
                                        <div className="project-complete__icon">
                                            <i className="flaticon-charity"></i>
                                        </div>
                                        <div className="project-complete__content">
                                            <h5>Plus de 34 900 personnes<br/> ont été servies</h5>
                                            <span>par ALARM DR Congo</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="image mt-65 rmt-15 rel">
                                        <img src="https://i.ibb.co/fNJzDxr/Untitled-design-2-compressed.jpg" alt="About" />
                                        <div className="experiences-years">
                                            <span className="experiences-years__number">25</span>
                                            <span className="experiences-years__text">
                                            Années d'expériences</span>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src="https://i.ibb.co/GdJZsxd/Untitled-design-3-compressed.jpg" alt="About" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content-part rmt-65">
                            <div className="section-title mb-60">
                                <span className="section-title__subtitle mb-10">ALARM CONGO</span>
                                <h2>Nos <span>Partenaires internationaux et locaux</span></h2>
                            </div>
                            <div className="client-logo-wrap row">
                                <SimpleSliderResponsive slidesToShow={3} >
                                    {[
                                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/c4529e31-b769-4db8-ab01-c4373d0a299c.png",
                                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/09b0a549-9c44-4d3e-b725-243a011049eb.png",
                                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/7bfb5f27-1322-44f2-a917-9684f0394e35.png",
                                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/afad3c8a-cd1d-4992-b489-f47e3be8168b.png",
                                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/1f51df50-22e7-4d21-bb39-2ec5d35a8ace.png"

                                    ].map((item, index) => (
                                        <div className="client-logo-item col-xl-2 col-md-2">
                                            <a href="#"><img style={{ height: "150px", width: "150px", objectFit: "contain", borderRadius: "15px", overflow: "hidden" }} src={item} alt="Client Logo" /></a>
                                        </div>

                                    ))}

                                </SimpleSliderResponsive>
                            </div>
                            <div className="counter-item counter-text-wrap">
                                <div className="counter-item__icon counter-item__icon--green"><i className="flaticon-help"></i>
                                </div>
                                <div className="counter-item__content">
                                    <span className="count-text" data-speed="1000" data-stop="20450">20 450</span>
                                    <span className="counter-title">
                                    Plus de 20 450 personnes ont été formées au leadership par ALARM DR Congo</span>
                                </div>
                            </div>
                            {/* <a className="btn ml-5 mt-25" href="#">Didcover more</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="features-area-three">
        //     {/* <!-- Features area start --> */}
        //     <div className="container">
        //         <div className="row py-100 align-items-center">
        //         <div className="row justify-content-center">

        //                 <div className="section-title text-center text-white mb-55">
        //                     <span className="section-title__subtitle mb-10">ALARM CONGO</span>
        //                     <h2 style={{color:"#000"}}>Nos  <span>Partenaires</span></h2>
        //                     {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati
        //                         consectetur adipisicing</p> */}
        //                 </div>

        //         </div>
        //             <div className="container">
        //     <div className="client-logo-wrap row">
        //         <SimpleSliderResponsive slidesToShow={4} >
        //            { [
        //                 "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/c4529e31-b769-4db8-ab01-c4373d0a299c.png",
        //                 "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/09b0a549-9c44-4d3e-b725-243a011049eb.png",
        //                 "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/7bfb5f27-1322-44f2-a917-9684f0394e35.png",
        //                 "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/afad3c8a-cd1d-4992-b489-f47e3be8168b.png",
        //                 "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/1f51df50-22e7-4d21-bb39-2ec5d35a8ace.png"

        //             ].map((item,index)=>(
        //             <div  className="client-logo-item col-xl-2 col-md-2">
        //                 <a href="#"><img style={{ height:"150px" , width:"150px", objectFit:"contain", borderRadius:"15px", overflow:"hidden"}} src={item} alt="Client Logo"/></a>
        //             </div>

        //             ))}

        //         </SimpleSliderResponsive>
        //     </div>
        // </div>
        //         </div>
        //     </div>
        //     {/* <!-- Features area end --> */}
        // </div>
    )
}

export default MoreFeautures;