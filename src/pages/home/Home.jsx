import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/homeComponents/SecondSectionHome";
import Portfolio from "../../components/homeComponents/Portfolio";
import MostRecentWork from "../../components/homeComponents/MostRecentWork";
import Faq from "../../components/homeComponents/Faq";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative">
      <FirstSectionHome />
      <SecondSectionHome />
      <MostRecentWork />
      <Portfolio />
      <Faq />
    </main>
  );
}

export default Home;
