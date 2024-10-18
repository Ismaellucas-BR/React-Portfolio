import MainMenu from "./MainMenu";

function Header() {
  return (
    <header className="relative w-full bg-black text-white flex items-center flex-col h-auto max-w-[1500px] lg:w-full lg:px-5 font-inter">
      <div className="relative flex items-center justify-center w-full p-5 z-10">
        <div className="item justify-between items-center lg:flex">
          <a href="/">
            <img
              src="/assets/Logo.png"
              width={400}
              height={200}
              alt="Ismael Lucas"
            />
          </a>
          <nav className="hidden nav-menu bg-white text-black lg:ml-10 justify-center items-center gap-5">
            <a href="/dirigir">Projetos</a>
            <a href="/projetos">Portfólio</a>
          </nav>
        </div>
        <div className="flex items-end justify-between w-full bg-black">
          <MainMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
