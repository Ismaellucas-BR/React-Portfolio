import React, { Suspense, lazy } from "react";
import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/HomeComponents/SecondSectionHome";
import Portfolio from "@/components/homeComponents/Portfolio";
const Timeline = lazy(() =>
  import("../../components/SobreComponents/VerticalTimeline")
);

function About() {
  return (
    <>
      <FirstSectionHome />
      <Suspense fallback={<div>Loading...</div>}>
        <Timeline />
      </Suspense>
      <SecondSectionHome />
      <Portfolio />
    </>
  );
}

export default About;
