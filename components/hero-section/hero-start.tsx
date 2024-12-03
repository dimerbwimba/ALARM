import CongoTxt from "../design-utils/congo-txt";

const HeroStart = () => {
    return (
        <div className="hero-area-two bgs-cover overlay py-200" style={{ backgroundImage: 'url(/assets/img/happy-hero.JPG)' }}>
            {/* <!-- Hero start --> */}
            <div className="container">
                <div className="hero-content mt-110 rmt-0 mb-65 text-center text-white rel z-1">
                    <h1>Bienvenu À <span className="">ALARM-<span></span><CongoTxt/></span>
                    <p className=" uppercase with-transparent-border">(<span style={{ color:"#924417"}}>A</span>frican <span style={{ color:"#924417"}}>L</span>eadership and <span style={{ color:"#924417"}}>R</span>econciliation <span style={{ color:"#924417"}}>M</span>inistries)</p>
                    </h1>
                    {/* <h5><span>ALARM</span> collabore avec les leaders religieux et communautaires pour autonomiser les familles et les communautés à travers la RD Congo avec des connaissances, des outils et des compétences.</h5> */}
                   
                    <div className="hero-btns pt-15 rpt-0">
                        <a  className="btn" href="/contact">Rejoignez-nous</a>
                    </div>
                    <img className="hero-shape-two top_image_bounce" src="assets/img/shapes/three-round-green.png" alt="Shape" />
                </div>
            </div>
            {/* <!-- Hero end --> */}
        </div>
    )
}

export default HeroStart;