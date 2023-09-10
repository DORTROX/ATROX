"use client";

import Banner from "@/components/BuiltComponents/Banner";
import Experience from "@/components/BuiltComponents/Exp";
import PromotionalBanner from "@/components/BuiltComponents/PromotionalBanner";
import PromotionalCard from "@/components/BuiltComponents/PromotionalCards";

export default function Home() {
  return (
    <>
      <Banner />
      <PromotionalCard />
      <Experience />
      <PromotionalBanner />
    </>
  );
}
