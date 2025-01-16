"use client";
import { useEffect, useState } from "react";
import AdvantageSection from "@/components/sections/advantage.section";
import HeroSection from "@/components/sections/hero.section";
import PortofolioSection from "@/components/sections/portofolio.section";
import ServiceSection from "@/components/sections/service.section";
import VisionSection from "@/components/sections/vision.section";
import MissionSection from "@/components/sections/mission.section";
import AboutUsSection from "@/components/sections/about-us.section";

export default function AboutUs() {
  const [isInView, setIsInView] = useState({
    vision: false,
    mission: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const visionSection = document.getElementById("vision-section");
      const missionSection = document.getElementById("mission-section");

      if (visionSection && missionSection) {
        const visionTop = visionSection.getBoundingClientRect().top;
        const missionTop = missionSection.getBoundingClientRect().top;

        setIsInView({
          vision: visionTop <= window.innerHeight / 1.5 && visionTop > 0,
          mission: missionTop <= window.innerHeight / 1.5 && missionTop > 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className='bg-gray-50 min-h-screen'>
      <HeroSection />

      <AboutUsSection />

      <PortofolioSection />

      <VisionSection isVisible={isInView.vision} />

      <MissionSection isVisible={isInView.mission} />

      <ServiceSection />

      <AdvantageSection />
    </main>
  );
}
