import MarketingWord from "@/components/marketing-word/marketing-word";
import PageBanner from "@/components/page-banner";
import Nous from "@/components/qui-somme-nous/nous";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Qui somme nous",
    description: "Historique d'ALARM CONGO",
};
export default function QuiSommeNous() {
    return (
        <>
            <PageBanner image="/" title="Historique d'ALARM CONGO" />
            <Nous/>
            <MarketingWord/>
        </>
    )
}