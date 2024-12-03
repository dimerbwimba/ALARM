const Footer = () => {
    return (
        <>
            <footer className="footer-area overlay text-white pt-120 bgs-cover"
                style={{ backgroundImage: "url('https://i.ibb.co/x6gsYpX/DSC-0172.jpg');" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="widget widget_about">
                                <div className="logo_footer mb-25">
                                    <a href="index.html">
                                        <img src="/assets/img/alarm.png" alt="Logo" />
                                    </a>
                                </div>
                                <p>
                                    ALARM-CONGO est une organisation à but non lucratif qui collabore étroitement avec les leaders religieux et communautaires en République démocratique du Congo.
                                </p>
                                <div className="social-style-one pt-20">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="flaticon-google-plus-logo"></i></a>
                                    <a href="#"><i className="flaticon-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                            <div className="widget widget_nav_menu">
                                <h5 className="widget-title">About</h5>
                                <ul>
                                    {
                                        [
                                            {
                                                label: "Acceuille",
                                                link: "#"
                                            },
                                            {
                                                label: "À Propos De Nous",
                                                link: "#"
                                            },
                                            {
                                                label: "Conseils D'administration",
                                                link: "#"
                                            },
                                            {
                                                label: "Projet a long terme",
                                                link: "#"
                                            }

                                        ].map((item, index) => (

                                            <li key={index}><a href="#">{item.label}</a></li>
                                        ))

                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                            <div className="widget widget_nav_menu">
                                <h5 className="widget-title">Quick links</h5>
                                <ul>
                                    <li><a href="#">Contactez nous directement</a></li>
                                    <li><a href="/contact">Rejoignez nous</a></li>
                                    <li><a href="#">Nouvelles et mise a jour</a></li>
                                    <li><a href="#">Gestion du site</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="widget widget_gallery">
                                <h4 className="widget-title">Photo Gallery</h4>
                                <div className="gallery-photos">
                                    <div className="gallery-photos">
                                        <a href="/assets/img/département-1.JPG">
                                            <img src="/assets/img/département-1.JPG"
                                                alt="Gallery" /></a>
                                        <a href="assets/img/département-2.JPG">
                                            <img src="/assets/img/département-2.JPG"
                                                alt="Gallery" /></a>
                                    </div>
                                    <div className="gallery-photos">
                                        <a href="assets/img/département-3.JPG">
                                            <img src="/assets/img/DSC_0547.JPG"
                                                alt="Gallery" /></a>
                                        <a href="assets/img/happy-hero.JPG">
                                            <img src="/assets/img/happy-hero.JPG"
                                                alt="Gallery" /></a>
                                    </div>
                                    <div className="gallery-photos">
                                        <a href="/assets/img/département-3.JPG">
                                            <img src="/assets/img/département-3.JPG"
                                                alt="Gallery" /></a>
                                        <a href="assets/img/psa-photo.JPG">
                                            <img src="/assets/img/psa-photo.JPG"
                                                alt="Gallery" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-50">
                    <div className="container">
                        <div className="footer-bottom__inner">
                            <div className="donate-by">
                                <span>Created by :</span>
                                <span>Dimer Bwimba </span>
                            </div>
                            <div className="copyright">
                                <p>Copyright 2024 All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- footer area end --> */}

            {/* <!-- back to top area start --> */}
            <div className="back-to-top">
                <span className="back-top"><i className="fa fa-angle-up"></i></span>
            </div>
            {/* <!-- back to top area end --> */}

        </>
    )
}
export default Footer;