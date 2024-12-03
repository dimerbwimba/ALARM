import SimpleSliderResponsive from "../slider/SliderSimple";

const AboutUs = () =>{
    return (
        <div className="about-us-two py-120">
        <div className="container">
            <div className="row gap-100 align-items-center">
                <div className="col-xl-6">
                    <div className="about-us-content-part mb-50">
                        <div className="section-title mb-47">
                            <span className="section-title__subtitle mb-10">À Propos De Nous</span>
                            <h2>Bienvenu a ALARM CONGO <span></span></h2>
                        </div>
                        <p>ALARM-CONGO est une organisation à but non lucratif qui collabore étroitement avec les leaders religieux et communautaires en République démocratique du Congo. Notre mission est d’autonomiser les familles et les communautés en leur fournissant des connaissances, des outils et des compétences essentiels. Nous croyons en la réconciliation, le développement des leaders serviteurs et la transformation positive des communautés. Rejoignez-nous dans notre quête pour un avenir meilleur !</p>
                                               
                            <SimpleSliderResponsive>
{
                             [
                                "https://i.ibb.co/Gpy3sQj/IMG-0006-compressed.jpg",
                                "https://i.ibb.co/j4PwWfT/IMG-1480-compressed.jpg",
                              
                             ].map((item,index) =>(
                                // <div key={index} className=" px-2">
                                     <img key={index} className="px-2" src={item} alt="About"/>
                                // </div>
                             ))}
                                
                                
                               
                            </SimpleSliderResponsive>
                       
                                               
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="about-us-image-part mb-65 rel">
                        <img src="https://i.ibb.co/JQ8y7b9/IMG-1756-compressed.jpg" alt="About"/>
                        <div className="experiences-year" style={{backgroundImage: 'url(assets/img/about/experiences.jpg)'}}>
                            <span className="experiences-year__number">25</span>
                            <span className="experiences-year__text">ans d'experiences</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- About us area end --> */}
    </div>
    
    )
}

export default AboutUs;