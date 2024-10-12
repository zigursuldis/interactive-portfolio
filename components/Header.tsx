export default function Header() {
  return (
    <header className="h-12 lg:h-24 w-full border-b-[1px] border-border-light flex items-center">
      <nav className="flex justify-end w-full">
        <a href="#" className="mr-5 text-sm md:text-base">
          link 1
        </a>
        <a href="#" className="mr-5 text-sm md:text-base">
          link 2
        </a>
        <a href="#" className="text-sm md:text-base">
          link 3
        </a>
      </nav>
    </header>
  );
}
