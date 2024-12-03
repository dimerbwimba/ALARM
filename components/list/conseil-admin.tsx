import Head from "next/head";

const ConseilAdminList = () => {
    return (
        <div className="volunteer-style-one pt-120 pb-90 rel z-1">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title text-center mb-60">
                            <span className="section-title__subtitle mb-10">ALARM RDC</span>
                            <h2> Membres du Conseil <span>D&apos;Administration</span></h2>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        [
                            {
                                name: "Rev. PUTULU LUKOZI Alphonse",
                                assignation: "Président",
                                image: "/assets/img/conseil-admin/president.JPG",
                                email: ""
                            },
                            {
                                name: "Past. NZABONIMPA Apollinaire",
                                assignation: "Vice-Président",
                                image: "/assets/img/conseil-admin/vice-president.JPG",
                                email: ""
                            },
                            {
                                name: "Madame NYAKALIMA Sella",
                                assignation: "Conseillère",
                                image: "/assets/img/conseil-admin/conseiller.JPG",
                                email: ""
                            },
                            {
                                name: "NKIKO Léonie",
                                assignation: "Secrétaire",
                                image: "/assets/img/conseil-admin/secretaire.JPG",
                                email: ""
                            },
                            {
                                name: "Rev. NKUNDIBIRAMA BATI Charles",
                                assignation: "Président honoraire actuellement conseiller",
                                image: "/assets/img/conseil-admin/president-hon.JPG",
                                email: ""
                            }
                        ].map((item, index) => (

                            <div key={index} className="col-xl-4 col-sm-6">
                                <div className="valunteer-item valunteer-item--green">
                                    <div className="valunteer-item__img">
                                        <img src={item.image} alt="Valunteer" />
                                        <div className="share">
                                            <button><i className="flaticon-share"></i></button>
                                            <div className="share__socials">
                                                <a href="#"><i className="flaticon-google-plus-logo"></i></a>
                                                <a href="#" className="facebook"><i className="flaticon-facebook"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="valunteer-item__designation">
                                        <h5>{item.name}</h5>
                                        <span>{item.assignation}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="justify-content-center">
                    <div className="blog-details-area py-120">
                        <div className="container col-lg-8">
                            <div className="row gap-60">
                                <div className="">
                                    <div className="blog-details-content mb-55">
                                        <hr />
                                        <h2>Role du conseil d&apos;Administration au sein d&apos;ALARM CONGO</h2>
                                        <hr />
                                        <ul className="blog-meta">
                                            <li><i className="flaticon-user"></i> <a href="#">Rev. PUTULU LUKOZI Alphonse</a></li>
                                            <li><i className="flaticon-bubble-chat"></i> <a href="#">0 Comment</a></li>
                                        </ul>
                                        <p></p>
                                        <p></p>
                                        <blockquote>
                                            <div className="quote-icon"><i className="flaticon-quote"></i></div>
                                            quote ou ama verse ya biblia
                                            <br />
                                        </blockquote>
                                        <p></p><br />
                                        <h5>titre</h5>
                                        <p></p>
                                        <div className="row pb-25">
                                            <div className="col-md-5 col-sm-6">
                                                <ul className="list-style-two">
                                                    <li>list</li>
                                                    <li>list</li>
                                                    <li>list</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="tag-and-share">
                                            <div className="row align-items-center">
                                                <div className="col-md-7">
                                                    <div className="tags">
                                                        <strong>Tag : </strong>
                                                        <a href="#">Charity</a>
                                                        <a href="#">Donation</a>
                                                        <a href="#">Homeless</a>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 text-md-end">
                                                    <div className="share-area">
                                                        <strong>Share: </strong>
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConseilAdminList;