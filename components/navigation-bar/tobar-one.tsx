
const TopBarOne = () => {
  return (
    <div className="navbar-top pt-30 rpt-10 navtop--two">
      {/* <!-- navbar start --> */}
      <div className="container">
        <div className="navtop-inner bgc-gray">
          <ul className="topbar-left">
            <li><b>Appel nous :<a href="callto:+243853282801"> +243 853282801
            </a></b></li>
            <li>Adress : Quartier Katingo, Avenu Beni N-212, Bloc III, Goma RDC</li>
          </ul>
          <ul className="topbar-right">
            <li className="social-area">
              <span>Social</span>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              {/* <a href="#"><i className="fab fa-pinterest-p"></i></a> */}
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default TopBarOne;