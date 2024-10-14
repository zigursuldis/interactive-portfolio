export default function Header() {
  return (
    <header className="h-12 lg:h-[64px] w-full border-b-[1px] border-border-light flex items-center">
      <nav className="flex justify-end w-full">
        <a
          href="#about_me"
          className="mr-5 text-sm md:text-base hover:text-white"
        >
          About me
        </a>
        <a href="#contact" className="text-sm md:text-base hover:text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
