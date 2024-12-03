import Image from 'next/image'

const DepartementList = () => {
    return (
        <div className="blog-clasic-area py-120">
            <div className="container">
                <div className="row gap-60">
                    <div className="col-lg-8">
                        <div className="blog-item blog-item--clasic">
                            <div className="blog-item__img">
                                <Image 
                                    src="/assets/img/département-2.JPG"
                                    alt="Blog Clasic"
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="post-date">
                                    <h2><a href="#">
                                        1. Reconcilier les relations</a></h2>
                                </div>
                            </div>
                            <div className="blog-item__content">
                                <div className="widget widget_catagory">
                                    <ul className="catagory-items">
                                        <li><a href="#">Guérison des traumatismes</a></li>
                                        <li><a href="#">Médiation</a></li>
                                        <li><a href="#">Gestion et résolution des conflits</a></li>
                                        <li><a href="#">Construction de la Paix et la Justice</a></li>
                                        <li><a href="#">Clinique Juridique</a></li>
                                        <li><a href="#">Synergie de Juristes Chrétiens...etc.</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item blog-item--clasic">
                            <div className="blog-item__img">
                                <Image 
                                    src="/assets/img/département-4.JPG"
                                    alt="Blog Clasic"
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="post-date">
                                    <h2><a href="#">
                                        2. Transformation des communautés </a></h2>
                                </div>
                            </div>
                            <div className="blog-item__content">
                                <div className="widget widget_catagory">
                                    <ul className="catagory-items">
                                        <li><a href="#">Renforcer les capacité économiques</a></li>
                                        <li><a href="#">Education à l&apos;économie domestique</a></li>
                                        <li><a href="#">Formation en coupe et couture</a></li>
                                        <li><a href="#">Adduction en eau potable</a></li>
                                        <li><a href="#">Scolarisation des enfants orphelins</a></li>
                                        <li><a href="#">Alphabétisation Conscientisante...etc</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item blog-item--clasic">
                            <div className="blog-item__img">
                                <Image 
                                    src="/assets/img/département-1.JPG"
                                    alt="Blog Clasic"
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="post-date">
                                    <h2><a href="#">
                                        3. LEADERSHIP SERVITEUR </a></h2>
                                </div>
                            </div>
                            <div className="blog-item__content">
                                <div className="widget widget_catagory">
                                    <ul className="catagory-items">
                                        <li><a href="#">Former les Leaders</a></li>
                                        <li><a href="#" >Renforcer les capacités des Eglise</a></li>
                                        <li><a href="#">PLTI et WLTI</a></li>
                                        <li><a href="#">Ambassadeurs de la Paix</a></li>
                                        <li><a href="#">Equiper les Leaders...etc</a></li>
                                        <li><a href="#">Alphabétisation Conscientisante...etc</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="main-sidebar rmt-75">
                            <div className="widget widget_cta">
                                <div className="cta-widget-inner" style={{ backgroundImage: "url(assets/img/widgets/cta-bg.jpg);" }}>
                                    <h5>We have provided financial help to 5 million people</h5>
                                    <a className="btn ml-5" href="donate.html">Donate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepartementList