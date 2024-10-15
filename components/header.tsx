export default function Header() {
  return (
    <header className="h-12 lg:h-[64px] w-full border-b-[1px] border-border-light flex items-center font-departure-mono">
      <a
        href="."
        className="text-sm md:text-base hover:text-accent-light duration-200 text-nowrap font-departure-mono [text-shadow:_0_4px_0_#000]"
      >
        {"Uldis Zigurs>"}
      </a>
      <nav className="flex justify-end w-full">
        <a
          href="#about_me"
          className="mr-5 text-sm md:text-base hover:text-accent-light duration-200"
        >
          About me
        </a>
        <a
          href="#contact_me"
          className="text-sm md:text-base hover:text-accent-light duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
