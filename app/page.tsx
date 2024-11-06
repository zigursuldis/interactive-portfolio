import dynamic from "next/dynamic";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Timeline from "@/components/timeline/timeline";
import Skills from "@/components/skills/skills";
import ContactMe from "@/components/contact-me";
import Divider from "@/components/divider";
import Work from "@/components/work/work";
const Header = dynamic(() => import("@/components/header/header"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col min-h-screen mx-8 lg:mx-12 max-w-[1000px] w-full items-center">
        <Header />
        <main className="grow w-full">
          <Banner />
          <h2 className="text-xl font-departure-mono" id="about_me">
            About me
          </h2>
          <Divider />
          <Timeline />
          <h2 className="text-xl font-departure-mono" id="skills">
            Skills & technologies
          </h2>
          <Divider />
          <Skills />
          <h2 className="text-xl font-departure-mono" id="work">
            Work (notable projects)
          </h2>
          <Divider />
          <Work />
          <h2 className="text-xl font-departure-mono" id="contact_me">
            Contact me
          </h2>
          <Divider />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </div>
  );
}
