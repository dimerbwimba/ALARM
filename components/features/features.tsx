import DrcFlagBorderSingle from "../design-utils/drc-flag-color-border";

const AlarmFeatures = () => {
    return (
        <div className="features-area-two rel z-2 ">
            {/* <!-- Features area start --> */}
            <div className="container ">

                <div className="row no-gutter radius justify-content-center">
                    <div className="col-xl-4 col-md-6">
                        <DrcFlagBorderSingle n={"one"} />
                        <div className="feature-item--two"
                            style={{ backgroundImage: 'url(https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/02988642-6935-41ed-b004-ad8938a1d650.JPG)' }}>
                            <div className="feature-item__icon"><i className="flaticon-help"></i></div>
                            <h4><a href="#">Réconcilier les relations.</a></h4>
                            <p>Promouvoir la réconciliation et l’harmonie au sein des communautés en RDC.</p>
                            {/* <a className="feature-item__btn" href="#">join us now</a> */}
                        </div>
                        {/* <DrcFlagBorderSingle n={"one"} /> */}
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <DrcFlagBorderSingle n={"two"} />
                        <div className="feature-item--two feature-item--green"
                            style={{ backgroundImage: 'url(https://i.ibb.co/NZX3hV4/IMG-1288-min.jpg)' }}>
                            <div className="feature-item__icon"><i className="flaticon-donation"></i></div>
                            <h4><a href="#">Développer les Leaders Serviteurs.</a></h4>
                            <p> Renforcement des compétences des leaders religieux et communautaires en RDC.</p>
                            {/* <a className="feature-item__btn" href="#">join us now</a> */}
                        </div>
                        {/* <DrcFlagBorderSingle n={"two"} /> */}
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <DrcFlagBorderSingle n={"three"} />
                        <div className="feature-item--two feature-item--yellow"
                            style={{ backgroundImage: 'url(https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/eda297ce-50a2-4e70-84ef-ee19e10be5e2.JPG)' }}>
                            <div className="feature-item__icon"><i className="flaticon-solidarity"></i></div>
                            <h4><a href="#">Transformer les communautés.</a></h4>
                            <p>Apporter des changements  positifs<br /> et durables dans les <br /> communautés en RDC.</p>
                            {/* <a className="feature-item__btn" href="#">join us now</a> */}
                        </div>
                        {/* <DrcFlagBorderSingle n={"three"} /> */}
                    </div>
                </div>
            </div>
            {/* <!-- Features area end --> */}
        </div>
    )
}

export default AlarmFeatures;