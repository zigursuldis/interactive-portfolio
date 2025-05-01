import dynamic from "next/dynamic";

//this causes layout shift due to only one being CSR
const HamburgerMenu = dynamic(
  () => import("@/components/header/hamburger-menu"),
  { ssr: false }
);

export default function Header() {
  return (
    <header className="h-12 lg:h-[64px] w-full border-b-[1px] border-border-light flex items-center font-departure-mono ">
      <a
        href="."
        className="text-sm md:text-base hover:text-accent-light duration-200 text-nowrap font-departure-mono [text-shadow:0_4px_0_#000]"
      >
        {"Uldis Zigurs>"}
      </a>
      <nav className="flex justify-end w-full">
        <a
          href="#about_me"
          className="flex items-center mr-5 text-sm md:text-base hover:text-accent-light duration-200"
        >
          About me
        </a>
        <a
          href="#work"
          className="flex items-center text-sm md:text-base hover:text-accent-light duration-200"
        >
          Work
        </a>
        <HamburgerMenu />
      </nav>
    </header>
  );
}
