import React from "react";
import dynamic from "next/dynamic";
import FirstSectionHome from "../Components/HomeComponents/FirstSectionHome";
import SecondSectionHome from "../Components/HomeComponents/SecondSectionHome";
import MostRecentWork from "../Components/HomeComponents/MostRecentWork";
const Timeline = dynamic(
  () => import("../Components/SobreComponents/VerticalTimeline"),
  {
    ssr: false,
  }
);
function About() {
  return (
    <>
      <FirstSectionHome />
      <Timeline />
      <SecondSectionHome />
      <MostRecentWork />
    </>
  );
}

export default About;
