import React from "react";
import MainTitle from "../MainTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Faq() {
  return (
    <section className="flex flex-col py-10 px-5 gap-5 w-full max-w-[1500px] items-center mx-auto font-inter justify-center text-white">
      <MainTitle greenText="FAQ" />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Com quais as liguagens eu trabalho hoje em dia?
          </AccordionTrigger>
          <AccordionContent>
            Hoje em dia trabalho sempre na área do Javascript, Node js, React,
            Next js, Tailwind css, embora tenho muita experiencia com Wordpress
            e Elementor.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Porque o meu portfolio tem todas essas áreas?
          </AccordionTrigger>
          <AccordionContent>
            Ele foi desenvolvido para mostrar com o que tenho capacidade para
            criar em um site, como filtros, slides, faq, rotas e etc.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Faq;
