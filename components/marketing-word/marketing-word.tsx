import Link from "next/link";

const MarketingWord = ()=>{
    return (
        <div className="cta-area bgc-black pt-110 rpt-120 pb-120 rel z-1">
        {/* <!-- Call to action area start --> */}
        <div className="container container-1170">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center text-white">
                        <h2><span className="p-2">ALARM RDC </span>existe pour travailler aux côtés des églises et des leaders communautaires en fournissant les connaissances nécessaires pour le développement durable.  </h2>
                       
                        <Link className="btn mt-35" href="/contact">Contactez-Nous</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta-area-shapes">
            <img className="one" src="/assets/img/valunteer/valunteer-bg.png" alt="Shape"/>
            <img className="two" src="/assets/img/valunteer/valunteer-bg2.png" alt="Shape"/>
        </div>
    </div>
   
    
    )
}

export default MarketingWord;