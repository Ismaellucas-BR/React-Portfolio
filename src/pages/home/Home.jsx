import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/homeComponents/SecondSectionHome";
import Portfolio from "../../components/homeComponents/Portfolio";
import MostRecentWork from "../../components/homeComponents/MostRecentWork";
import Faq from "../../components/homeComponents/Faq";
import Modal from "@/components/Modal";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative">
      <Modal />
      <FirstSectionHome />
      <SecondSectionHome />
      <MostRecentWork />
      <Portfolio />
      <Faq />
    </main>
  );
}

export default Home;
