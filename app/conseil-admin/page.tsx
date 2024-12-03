import ConseilAdminList from "@/components/list/conseil-admin";
import MarketingWord from "@/components/marketing-word/marketing-word";
import PageBanner from "@/components/page-banner";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Conseil D'Administration",
    description: "Membres et Role du conseil d'Administration au sein d'ALARM RDC",
  };
export default function ConseilAdmin() {
    return (
        <>
            <PageBanner image="/assets/img/conseil-admin.JPG" title="Conseil D'Administration" />
            <ConseilAdminList />
            <MarketingWord />
        </>
    )
}