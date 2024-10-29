import MainMenu from "./MainMenu";

function Header() {
  return (
    <header className="relative w-full bg-black text-white flex items-center flex-col h-auto max-w-[1500px] lg:w-full lg:pr-5 font-inter">
      <div className="relative flex items-center justify-center w-full p-5 z-10 lx-cusom:px-5">
        <div className="item justify-between items-center lg:flex">
          <a href="/">
            <img
              src="/assets/Logo.png"
              width={400}
              height={200}
              alt="Ismael Lucas"
            />
          </a>
        </div>
        <div className="flex items-end justify-between w-full bg-black">
          <MainMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
