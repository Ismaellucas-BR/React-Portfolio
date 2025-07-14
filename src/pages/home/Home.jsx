import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/homeComponents/SecondSectionHome";
import Portfolio from "../../components/homeComponents/Portfolio";
import MostRecentWork from "../../components/homeComponents/MostRecentWork";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center relative">
      <FirstSectionHome />
      <SecondSectionHome />
      <MostRecentWork />
      <Portfolio />
    </main>
  );
}

export default Home;
