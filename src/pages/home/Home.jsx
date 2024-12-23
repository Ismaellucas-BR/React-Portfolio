import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/homeComponents/SecondSectionHome";
import Portfolio from "../../components/homeComponents/Portfolio";
import Faq from "../../components/homeComponents/Faq";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative">
      <FirstSectionHome />
      <SecondSectionHome />
      <Portfolio />
      <Faq />
    </main>
  );
}

export default Home;
