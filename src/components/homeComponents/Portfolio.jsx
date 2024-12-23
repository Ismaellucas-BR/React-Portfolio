import MainTitle from "../MainTitle";
import { useState } from "react";
import projects from "../../../data/projects.json";
import Menu from "../Menu";
import Button from "../Button";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const allCategories = [
  "Tudo",
  ...new Set(
    projects
      .map((item) => capitalize(item.category.trim().toLowerCase()))
      .filter((value, index, self) => self.indexOf(value) === index)
  ),
];

function Portfolio() {
  const [menuItem, setMenuItem] = useState(projects);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "Tudo") {
      setMenuItem(projects);
      return;
    }

    const filteredData = projects.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <section className="flex flex-col gap-5 px-5 py-10 lg:py-20 lg:max-w-[1500px] lg:mx-8 items-center">
      <div className="w-full flex flex-col items-center font-semibold">
        <h3 className="text-light-green text-sm font-inter">PORTFOLIO</h3>
        <MainTitle whiteText="Últimos" greenText="Trabalhos" />
      </div>
      <div className="busca">
        <h3 className="text-white font-inter font-semibold text-xl">
          Faça sua <span className="text-light-green">Busca</span> com apenas{" "}
          <span className="text-light-green">um clique</span>
        </h3>
      </div>

      <Button button={buttons} filter={filter} />

      <Menu menuItem={menuItem} />
    </section>
  );
}

export default Portfolio;
