import SimpleSliderResponsive from "../slider/SliderSimple";

const Partenaire =  ()=>{
    return (
        <div className="client-logo-area py-30"
        style={{backgroundImage:'url(assets/img/client-logo/client-logo-section-bg.jpg)'}}>
             {/* <!-- Client Logo area start --> */}
        <div className="container">
            <div className="client-logo-wrap row">
                <SimpleSliderResponsive slidesToShow={4} >
                   { [
                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/c4529e31-b769-4db8-ab01-c4373d0a299c.png",
                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/09b0a549-9c44-4d3e-b725-243a011049eb.png",
                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/7bfb5f27-1322-44f2-a917-9684f0394e35.png",
                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/afad3c8a-cd1d-4992-b489-f47e3be8168b.png",
                        "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/1f51df50-22e7-4d21-bb39-2ec5d35a8ace.png"

                    ].map((item,index)=>(
                    <div  className="client-logo-item col-xl-2 col-md-2">
                        <a href="#"><img style={{ height:"150px" , width:"150px", objectFit:"contain", borderRadius:"15px", overflow:"hidden"}} src={item} alt="Client Logo"/></a>
                    </div>

                    ))}
                
                </SimpleSliderResponsive>
            </div>
        </div>
        {/* <!-- Client Logo area end --> */}
    </div>
    )
}

export default Partenaire;