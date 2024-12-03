const VideoPreview = () => {
    return (
        <div style={{}} className="charity-video rel pt-250 ">
            <div className="charity-area-bg" style={{ backgroundImage: "url(assets/img/psa-photo.JPG)" }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 pt-50">
                            <h2 className=""><span style={{color:"#924417"}}>ALA</span><span>RM</span> <span style={{color:"rgb(80, 80, 231)"}}>CO</span><span style={{color:"rgb(243, 58, 58)"}}>N</span><span style={{color:"rgb(241, 241, 64)"}}>GO</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="charity-video-part overlay mb-25">
                            <img src="assets/img/psa-video.JPG" alt="Video" />
                            <a className="video-play video-play--two" href="https://www.youtube.com/embed/Wimkqo8gDZ0"
                                data-effect="mfp-zoom-in"><i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPreview;