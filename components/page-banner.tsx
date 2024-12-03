const PageBanner = ({image, title}:{image:string, title:string}) => {
    return (
        <div className="page-banner-area bgs-cover overlay text-white py-200 rpy-125 rmt-65"
            style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="breadcrumb-inner text-center">
                            <h2 className="page-title">{title}</h2>
                            <ul className="page-list">
                                <li><a href="/">Home</a></li>
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner;