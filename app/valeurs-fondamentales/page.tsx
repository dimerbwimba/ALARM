import MarketingWord from "@/components/marketing-word/marketing-word";
import PageBanner from "@/components/page-banner";
import ValeursFondamentale from "@/components/valeurs-fondamentales/valeurs-fondamentales";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Valeurs Fondamentales",
    description: "Nous sommes convaincus que sans le Leadership pastoral fort, l'Eglise Africaine restera superficielle, syncrétiques et sans vraie transformation; sans croissance spirituelle et sans maturité.",
  };
export default function ValeursFondamentales(){
    return (
        <>
            <PageBanner image="assets/img/valeurs-fondamentales.JPG" title="Valeurs fondamentales"/>
            <ValeursFondamentale/>
            <MarketingWord/>
        </>
    )
}