import React, { useState, useEffect } from "react";

function NewMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const MenuD = document.getElementById("menuDesktop");

    if (isMenuOpen) {
      MenuD.classList.remove("hidden"); // Mostra o menu
      document.body.classList.add("overflow-hidden"); // Remove o scroll do body
    } else {
    }

    return () => {};
  }, [isMenuOpen]);

  function handleSetMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function handleCloseMenu() {
    const MenuD = document.getElementById("menuDesktop");
    setIsMenuOpen(false);
    MenuD.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
  function handleOutsideClick(event) {
    const MenuD = document.getElementById("menuDesktop");
    console.log("teste");
    console.log(isMenuOpen);
    console.log(MenuD.contains(event.target));

    if (isMenuOpen && !MenuD.contains(event.target)) {
      console.log("verdade");
      document.body.classList.remove("overflow-hidden");
    } else {
      console.log("merda");
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick); // Cleanup do evento
    };
  }, [isMenuOpen]);

  return (
    <div className="hidden justify-end items-center w-full sm:flex">
      <h2 onClick={handleSetMenu} className="hover:cursor-pointer">
        Menu Novo
      </h2>

      <div
        id="menuDesktop"
        className="hidden absolute top-0 right-0 h-screen w-1/4 bg-black/70 z-10 bg-green-gradient"
      >
        <div className="flex justify-between items-center p-5 border-b border-light-green/70">
          <h2 className="font-inter text-lg text-white capitalize font-semibold">
            O que você gostaria de ver?
          </h2>
          <span onClick={handleCloseMenu} className="hover:cursor-pointer">
            x
          </span>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <a href="/sobre" className="text-3xl text-white font-txt-bold pt-5">
            Quem sou
          </a>
          <a href="/projects" className="text-3xl text-white font-txt-bold">
            Projetos
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
