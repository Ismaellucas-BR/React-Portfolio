import FirstSectionHome from "../../components/homeComponents/FirstSectionHome";
import SecondSectionHome from "../../components/homeComponents/SecondSectionHome";
import Portfolio from "../../components/homeComponents/Portfolio";

function Home() {
  return (
    <main className="relative">
      <FirstSectionHome />
      <SecondSectionHome />
      <Portfolio />
    </main>
  );
}

export default Home;
