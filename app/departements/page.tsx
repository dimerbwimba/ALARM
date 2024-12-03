import DepartementList from "@/components/list/departements";
import MarketingWord from "@/components/marketing-word/marketing-word";
import PageBanner from "@/components/page-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Departements / ALARM CONGO",
    description: "Plus sure nos Departements",
  };
export default function Departements() {
    return (
        <>
            <PageBanner image={"/assets/img/happy-hero.JPG"} title="Departements" />
            <DepartementList />
            <MarketingWord />
        </>
    )
}