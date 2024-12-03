import Link from "next/link";
import OurTeamBanner from "./team-banner";
import { link } from "fs";

const Teams = () => {
    return (

        <div className="volunteer-style-one pt-120 pb-90 rel z-1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title text-center mb-60">
                            <span className="section-title__subtitle mb-10">ALARM CONGO</span>
                            <h2>NOS <span>AGENTS</span></h2>
                            <p>Grâce Aux Efforts Combinés De Nos Agents, ALARM A Réalisé Un Impact Positif Dans De Nombreuses Régions De La RDC.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        [
                            {
                                name: "NZABONIMPA SEZIBERA Apollinaire",
                                post: "Directeur National",
                                photo: "https://i.ibb.co/cbt3Cqf/Untitled-design-3.png",
                                link: "/staff/nzabonimpa-sezibera-apollinaire",
                                email:""

                            },
                            {
                                name: "Me. Kahindo Mutumwa SYZA",
                                post: "Gestionaire de la Clinique Juridique",
                                photo: "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/cbca4a36-837c-4a05-8f71-e54cea605403.png",
                                link:"/staff/kyakimwa-valeyirwe-aziza",
                                email:""
                            
                            },
                            {
                                name: "BANGAMWABO NYANDWI JULES",
                                post: "Assistant Administratif et Comptable",
                                photo: "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/422d04a3-f07b-484a-8f75-6e54037059dc.png",
                                link:"/staff/bangamwabo-nyandwi-jules",
                                email:""
                            },
                            
                            {
                                name: "Me. Daniel KILANGALANGA Opondjo",
                                post: "Opondjo Coordinateur de Peace Building",
                                photo:"",
                                link:"/staff/me-daniel-kilangalanga-opondjo",
                                email:""
                            },
                            {
                                name:"Past. BALISEKA MUTOKA MBALI Pascal",
                                post:"Santinnel D'ALARM",
                                photo:"",
                                link:"/staff/past-baliseka-mutoka-mbali-pascal",
                                email:""
                            },
                            {
                                name:"SIBOMANA BAKIJIJE LUC",
                                post :"Santinnel D'ALARM",
                                photo:"",
                                link:"/staff/sibomana-luc"
                            },
                            {
                                name: "KYAKIMWA VALEYIRWE Aziza",
                                post: "Encadreur au centre Brenda",
                                photo: "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/50d8c716-a6a4-4c90-8d46-c4ed234b1781.png",
                                link:"/staff/kyakimwa-valeyirwe-aziza",
                                email:""
                            },
                            {
                                name: "NAKURE NEEMA Zebuliya",
                                post: "Encadreur au centre Brenda",
                                photo: "https://files.edgestore.dev/6jpwoivpjaowfuhl/publicFiles/_public/351ac6a1-6979-46d9-9254-3d5a35895a48.png",
                                link:"/staff/nakure-neema-zebuliya",
                                email:""
                            },
                        ].map((item, index) => (

                            <div className="col-xl-4 col-sm-6">
                                <div className="valunteer-item valunteer-item--green">
                                    <div className="valunteer-item__img">
                                        <img style={{ height: "250px", width: "300px", objectFit: "contain", borderRadius: "15px", overflow: "hidden" }} src={item.photo} alt={item.name} />
                                        <div className="share">
                                            <button><i className="flaticon-share"></i></button>
                                            <div className="share__socials">
                                                <a href="#"><i className="flaticon-google-plus-logo"></i></a>
                                                <a href="#" className="twitter"><i className="flaticon-twitter"></i></a>
                                                <a href="#" className="facebook"><i className="flaticon-facebook"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="valunteer-item__designation">
                                        <Link href={`${item.link}`} >
                                            <>
                                                <h5>{item.name}</h5>
                                                <span>{item.post}</span>
                                            </>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Teams;