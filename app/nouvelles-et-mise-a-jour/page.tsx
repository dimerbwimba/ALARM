import ListBlogs from "@/components/blogs/list-blogs";
import PageBanner from "@/components/page-banner";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Nouvelles et mise à jour",
  description: "Imformation, Articles , Blog, Nouvelles et mise à jour",
};



type Props = {
 
}
const BlogsPage = ({}: Props) => {
    return ( 
        <>
          <PageBanner image="/assets/img/contactez-nous.JPG" title="Nouvelles et mise à jour" />  
          <ListBlogs n={10} />
        </>
    );
}

export default BlogsPage