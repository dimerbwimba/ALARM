"use client";
const ValeursFondamentale = () => {
  return (
    <div
      className="features-area-four bgs-cover overlay pt-120 pb-90"
      style={{ backgroundImage: "url(assets/img/happy-hero.JPG)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-6">
            <div
              className="feature-item--two feature-item--radius"
              style={{ backgroundImage: "url(assets/img/département-1.JPG)" }}
            >
              <div className="feature-item__icon">
                <i className="flaticon-help"></i>
              </div>
              <p>
                Nous sommes convaincus que sans le Leadership pastoral fort,
                l&apos;Eglise Africaine restera superficielle, syncrétiques et sans
                vraie transformation; sans croissance spirituelle et sans
                maturité.
              </p>
              {/* <a className="feature-item__btn" href="/contact">Rejoignez nous</a> */}
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div
              className="feature-item--two feature-item--radius"
              style={{ backgroundImage: "url(assets/img/happy-hero.JPG)" }}
            >
              <div className="feature-item__icon">
                <i className="flaticon-donation"></i>
              </div>
              <p>
                Nous sommes engagés à renforcer les capacités de l&apos;Eglise
                Africaine, équiper les Pasteurs et autres Leaders afin qu&apos;ils
                éduquent les autres en matière de de la foi chrétienne pour la
                transformation de leurs communautés.
              </p>
              {/* <a className="feature-item__btn" href="#">join us now</a> */}
            </div>
          </div>
          <div className="col-xl-7 col-md-6">
            <div
              className="feature-item--two feature-item--radius feature-item--green"
              style={{ backgroundImage: "url(assets/img/happy-hero.JPG)" }}
            >
              <div className="feature-item__icon">
                <i className="flaticon-solidarity"></i>
              </div>
              <p>
                Nous focalisons sur l&apos;Eglise avec un coeur pour le Leadership
                Serviteur, l&apos;évangélisation et le discipolat au sein de l&apos;Eglise
                locale; préparer le Peuple de Dieu à servir partout ou il sera
                selon la Grande Commission, Matthieu 28:18-20.
              </p>
              {/* <a className="feature-item__btn" href="#">join us now</a> */}
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div
              className="feature-item--two feature-item--radius feature-item--green"
              style={{ backgroundImage: "url(assets/img/psa-photo.JPG)" }}
            >
              <div className="feature-item__icon">
                <i className="flaticon-solidarity"></i>
              </div>
              <p>
                Nous sommes engagés à oeuvrer pour le pardon, la réconciliation
                et la Transformation des Vies. 2Cor 5,18-20 Matthieu 6:9-15.
              </p>
              {/* <a className="feature-item__btn" href="#">join us now</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValeursFondamentale;
