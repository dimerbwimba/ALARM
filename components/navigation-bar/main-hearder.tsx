import Link from "next/link";
import DrcFlagBorder from "../design-utils/drc-flag-border";

const MainHearder = () => {
    return (
        <div>
            <DrcFlagBorder/>
            <nav className="navbar navbar--two navbar-area navbar-expand-lg">

                <div className="container nav-container navbar-bg">
                    <div className="responsive-mobile-menu">
                        <button className="menu toggle-btn d-block d-lg-none"
                            data-target="#Iitechie_main_menu"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-left"></span>
                            <span className="icon-right"></span>
                        </button>
                    </div>
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/img/alarm.png" alt="img" />
                        </Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <a className="search-bar-btn" href="#">
                            <i className="flaticon-magnifying-glass"></i>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="Iitechie_main_menu">
                        <ul className="navbar-nav menu-open text-lg-end">
                            <li className="menu-item-has-children">
                                <Link href="/">Acceuille</Link>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">À propos de nous</a>
                                <ul className="sub-menu">
                                    <li><a href="/qui-somme-nous">Qui somme nous </a></li>
                                    <li><a href="/conseil-admin">Conseils d&apos;administration</a></li>
                                    <li><Link href="/valeurs-fondamentales">Valeurs fondamentales</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Notre travail</a>
                                <ul className="sub-menu">
                                    <li><a href="#">Secteur d&apos;intérêt</a></li>
                                    <li><Link href="/projet-a-long-term">projet à long terme</Link></li>
                                    <li><a href="/nouvelles-et-mise-a-jour">nouvelles et mises à jour</a></li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop">
                        <a className="btn btn--style-two" href="donate.html">Faire un don</a>
                    </div>
                </div>
                {/* <!-- navbar end --> */}
            </nav>
        </div>
    )
}

export default MainHearder;