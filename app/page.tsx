import Banner from "@/components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Timeline from "@/components/timeline/timeline";
import Skills from "@/components/skills/skills";
import ContactMe from "@/components/contact-me";

export default function Home() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col min-h-screen mx-8 lg:mx-12 max-w-[1200px] w-full items-center">
        <Header />
        <main className="grow w-full">
          <Banner />
          <h3 className="text-xl font-departure-mono" id="about_me">
            About me
          </h3>
          <div className="w-full bg-border-light h-[1px] mt-2 text-2xl"></div>
          <Timeline />
          <h3 className="text-xl font-departure-mono">Skills & technologies</h3>
          <div className="w-full bg-border-light h-[1px] mt-2 text-2xl"></div>
          <Skills />
          <h3 className="text-xl font-departure-mono" id="contact_me">
            Contact me
          </h3>
          <div className="w-full bg-border-light h-[1px] mt-2 text-2xl"></div>
          <ContactMe />
        </main>
        <Footer />
      </div>
    </div>
  );
}
