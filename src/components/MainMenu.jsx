import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MainMenu() {
  return (
    <div className="flex items-end justify-between w-full bg-black">
      <div className="flex justify-end items-center w-full sm:hidden">
        <Sheet>
          <SheetTrigger>
            <h2>Menu</h2>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-black/90 border-b-light-green/70"
          >
            <SheetHeader className="text-white text-left">
              <SheetTitle className="text-white">
                O que você gostaria de ver?
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-3 mt-10">
                <a
                  href="/sobre"
                  className="text-3xl text-white font-txt-bold pt-5"
                >
                  Quem sou
                </a>
                <a
                  href="/projects"
                  className="text-3xl text-white font-txt-bold"
                >
                  Projetos
                </a>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden justify-end items-center w-full sm:flex">
        <Sheet>
          <SheetTrigger>Menu</SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/90 border-l-light-green/70"
          >
            <SheetHeader className="bg-black text-white text-left">
              <SheetTitle className="bg-black text-white">
                O que você gostaria de ver?
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-3 pt-10">
                <a href="/sobre" className="text-3xl text-white font-txt-bold">
                  Quem sou
                </a>
                <a
                  href="/projects"
                  className="text-3xl text-white font-txt-bold"
                >
                  Projetos
                </a>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default MainMenu;
