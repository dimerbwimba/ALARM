"use client"
import PageBanner from "@/components/page-banner";
import { useParams } from "next/navigation";

export default function BlogDetails() {
    const params = useParams();
       
    return (
        <>
            <PageBanner image="" title={`${params.slug}`} />
            <div className="container">
                <div className="justify-content-center">
                    <div className="blog-details-area py-120">
                        <div className="container col-lg-8">
                            <div className="row gap-60">
                                <div className="">
                                    <div className="blog-details-content mb-55">
                                        <h2>Reunion du conseille d&apos;administration</h2>
                                        <hr />
                                        <ul className="blog-meta">
                                            <li><i className="flaticon-user"></i> <a href="#">Bwimba Mihandago Dimer</a></li>
                                            <li><i className="flaticon-bubble-chat"></i> <a href="#">0 Comment</a></li>
                                        </ul>
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