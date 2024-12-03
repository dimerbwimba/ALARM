import Link from "next/link";
import Image from 'next/image'

const BlogCard = () => {
    return (

        <div className="col-xl-4 col-md-6">
            <div className="blog-item--three">
                <div className="blog-item__img">
                    <Image 
                        src="/assets/img/psa-photo.JPG"
                        alt="Blog"
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                    />
                    <div className="post-date">
                        <b>29</b>
                        <span>jun</span>
                    </div>
                </div>
                <div className="blog-item__content">
                    <h4>
                        <Link href="/nouvelles-et-mise-a-jour/reunion-du-conseille-dadministration">
                            Reunion du conseille d'administration
                        </Link>
                    </h4>
                    <Link href="/nouvelles-et-mise-a-jour/reunion-du-conseille-dadministration" className="read-more-two">Read More</Link>
                </div>
                <ul className="blog-item__meta">
                    <li><i className="flaticon-user"></i> <a href="#">BWIMBA</a></li>
                    <li className="line"></li>
                    <li><i className="flaticon-bubble-chat"></i> <a href="#">0 Comment</a></li>
                </ul>
            </div>
        </div>

    );
}

export default BlogCard;