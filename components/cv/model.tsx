import DrcFlagBorder from "@/components/design-utils/drc-flag-border"
import Image from 'next/image'

const CVModel = ({ data, title, image="" }: { data: any, title:string, image:string }) => {
    return (
        <>
            <div className="volunteer-style-one pb-90 rel z-1">

                <div className="container">
                    <div className="justify-content-center">
                        <div className="blog-details-area">
                            <div className="container col-lg-8">
                                <div className="row gap-60">
                                    <div className="">
                                        <div className="blog-details-content mb-55">
                                            <DrcFlagBorder/>
                                            {
                                                image == "" ? <h2>{title}</h2> :
                                                 <div className="blog-item__img">
                                                    <Image 
                                                      src={image}
                                                      alt="Blog Clasic"
                                                      width={500}
                                                      height={300}
                                                      className="w-full h-48 object-cover"
                                                    />
                                                    
                                                </div>
                                            }
                                            <DrcFlagBorder/>

                                            <h2>{title}</h2>
                                            <hr />
                                            <ul className="blog-meta">
                                                <li><i className="flaticon-user"></i> <a href="#"><i>{title}</i></a></li>
                                            </ul>
                                            {
                                                data.map((item: any, index: number) => (
                                                    <div key={item.id || index}>
                                                        <h4 style={{ paddingBottom: "0px" }}><i>{index + 1}.{item.section}</i></h4>
                                                        <hr />
                                                        {item?.info?.map((info: any, index: number) => (
                                                            <div className="info"><div className="titre">{info.name}</div> <span style={{ paddingLeft: "4px", paddingRight: "4px" }}>:</span><div>{info.info}</div></div>
                                                        ))}
                                                        {item?.educations?.map((info: any, index: number) => (
                                                            <div className="education col">
                                                                <div className="col-md-12">
                                                                    <h6 style={{ marginBottom: "0px" }} className="titre">{info.uni}</h6>
                                                                    <div>{info.cert}</div>
                                                                    <div style={{ borderColor: "yellow", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                        <h6 style={{ marginBottom: "0px" }}>{info.lieu}</h6>
                                                                        <div>{info.date}</div>
                                                                        <hr />
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        ))}
                                                        {
                                                            item.experience_prossionnels?.map((data: any, item: any) => (
                                                                <div>
                                                                    <div style={{ borderColor: "green", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                        <h5 style={{ marginBottom: "0px" }}>{data.titre.ci}</h5>
                                                                        <div>{data.titre.desc}</div>
                                                                        <h6 style={{ marginBottom: "0px" }}>{data.titre.lieu}</h6>
                                                                    </div>
                                                                    <hr />
                                                                    <div>
                                                                        <ul style={{ paddingLeft: "15px" }} className="list-style-two">
                                                                            {data.experiences.map((item: any, index: any) => <li className="">
                                                                                {item}
                                                                            </li>)}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                        {
                                                            item?.competences_interets?.comp ?

                                                                <div style={{ borderColor: "green", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                    <h5 style={{ marginBottom: "0px", paddingLeft: "3px", paddingRight: "3px" }}>{"Competence "}</h5>
                                                                    <p>{item?.competences_interets?.comp}</p>
                                                                </div> : ""

                                                        }
                                                        { item?.competences_interets?.expertise ?
                                                                <div style={{ borderColor: "green", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                    <h5 style={{ marginBottom: "0px", paddingLeft: "3px", paddingRight: "3px" }}>{"Competence "}</h5>
                                                                    <p>{item?.competences_interets?.expertise}</p>
                                                                </div> : ""
                                                        }
                                                         { item?.competences_interets?.centre ?
                                                                <div style={{ borderColor: "green", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                    <h5 style={{ marginBottom: "0px", paddingLeft: "3px", paddingRight: "3px" }}>{"Competence "}</h5>
                                                                    <p>{item?.competences_interets?.centre}</p>
                                                                </div> : ""
                                                        }
                                                        {
                                                            item?.formations ?

                                                                <div style={{ borderColor: "green", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                    <h5 style={{ marginBottom: "0px", paddingLeft: "3px", paddingRight: "3px" }}>{"Formations "}</h5>
                                                                    <p>{item.formations}</p>
                                                                </div> : ""

                                                        }
                                                        {
                                                            item.formation?.map((item: any, index: any) => (
                                                                <div style={{ borderColor: "green", borderLeft: "4px solid", paddingLeft: "10px", marginBottom: "4px", marginTop: "4px" }}>
                                                                    <h6 style={{ marginBottom: "0px", paddingLeft: "3px", paddingRight: "3px" }}>{item.nom}</h6>
                                                                    <div style={{ borderTop: "2px dashed" }}>{item.desc}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ))
                                            }
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CVModel;