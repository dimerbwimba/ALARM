
import AboutUs from "@/components/about-us/about-us";
import ListBlogs from "@/components/blogs/list-blogs";
import Departements from "@/components/departements/departements";
import DrcFlagBorder from "@/components/design-utils/drc-flag-border";
import AlarmFeatures from "@/components/features/features";
import MoreFeautures from "@/components/features/more-features";
import HeroStart from "@/components/hero-section/hero-start";
import MarketingWord from "@/components/marketing-word/marketing-word";
import Mission from "@/components/mission/mission";
import Teams from "@/components/our-team/teams";
import VideoPreview from "@/components/video-preview/video-preview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienvenu À ALARM-CONGO",
  description: "ALARM collabore avec les leaders religieux et communautaires pour autonomiser les familles et les communautés à travers la RD Congo avec des connaissances, des outils et des compétences.",
};

export default function Home() {
  return (
    <>
      <HeroStart />
      <AlarmFeatures />
      <VideoPreview />
      <DrcFlagBorder />
      <AboutUs />
      <Mission />
      <MoreFeautures />
      <DrcFlagBorder />
      <Departements />
      <MarketingWord />
      <DrcFlagBorder />
      <Teams />
      <ListBlogs n={3}/>
    </>
  );
}
