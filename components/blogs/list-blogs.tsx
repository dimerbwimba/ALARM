"use client"

import BlogCard from "./blog-card";

const ListBlogs = ({ n }: { n: number }) => {

    return (
        <div className="blog-page-area py-120 rel z-1">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="section-title text-center mb-60">
                        <span className="section-title__subtitle mb-10">Blogs</span>
                        <h2>Nouvelles <span> et Mise A Jour</span></h2>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {/* {Array(n).fill(0).map((_, index) => */}
                        <BlogCard />
                    {/* )} */}
                </div>
            </div>
        </div>
    );
}

export default ListBlogs;