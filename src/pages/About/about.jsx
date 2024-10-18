import React, { Suspense, lazy } from "react";
import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/HomeComponents/SecondSectionHome";
import MostRecentWork from "../../components/HomeComponents/MostRecentWork";

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
      <MostRecentWork />
    </>
  );
}

export default About;
