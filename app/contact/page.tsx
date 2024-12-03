import ContactezNous from "@/components/contact/contactez-nous";
import PageBanner from "@/components/page-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez Nous Directement",
  description: "Membres et Role du conseil d'Administration au sein d'ALARM RDC",
};
export default function ContactPage(){
    return(
        <>
          <PageBanner image={"/assets/img/département-1.JPG"} title="Contact Page"/>  
          <ContactezNous/>
        </>
    )
}