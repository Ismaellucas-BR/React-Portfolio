import { Chrono } from "react-chrono";
import MainTitle from "../MainTitle";
import liderImage from "/public/assets/agencia-lider.png";
import an1Image from "/public/assets/an1.png";
import dpImage from "/public/assets/DP.jpg";

function VerticalTimeline() {
  const items = [
    {
      title: "2022",
      cardTitle: "Agência Lider digital",
      cardSubtitle: "",
      cardDetailedText:
        "Agência onde comecei como Front-end e consegui me desenvolver muito profissionalmente.",
      media: {
        type: "IMAGE",
        source: {
          url: liderImage.src,
        },
      },
    },
    {
      title: "2023",
      cardTitle: "Aceleradora N1",
      cardSubtitle: "",
      cardDetailedText:
        "Com a experiência adquirida, eu consegui avançar ainda mais na aceleradora, melhorando e aprendendo novas coisas como Front-end.",
      media: {
        type: "IMAGE",
        source: {
          url: an1Image.src,
        },
      },
    },
    {
      title: "2023",
      cardTitle: "Diario de Pernambuco",
      cardSubtitle: "",
      cardDetailedText:
        "No Diario estou sempre criando novas paginas e consumindo APIs para criar novas funcionalidades para o site.",
      media: {
        type: "IMAGE",
        source: {
          url: dpImage.src,
        },
      },
    },
  ];

  return (
    <article
      className="flex flex-col gap-5 p-5 pb-10 
     lg:max-w-[1500px] w-full lg:pb-16 lg:mx-8 lg:items-center"
    >
      <MainTitle whiteText="Jornada" greenText="Profissional" />
      <Chrono
        className="w-full  border-b border-red-500"
        cardWidth="500px"
        items={items}
        mode="VERTICAL_ALTERNATING"
        scrollable={{ scrollbar: true }}
        disableToolbar={true}
        mediaSettings={{ align: "right", fit: "contain" }}
        theme={{
          primary: "rgb(92, 210, 185)",
          secondary: "rgb(92, 210, 185)",
          cardBgColor: "rgba(17, 17, 17, 0.7)",
          titleColor: "white",
          titleColorActive: "black",
        }}
      />
    </article>
  );
}

export default VerticalTimeline;
