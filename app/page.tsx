import Banner from "@/components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Timeline from "@/components/timeline/timeline";

export default function Home() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col min-h-screen mx-8 lg:mx-12 max-w-[1200px] w-full items-center">
        <Header />
        <main className="grow w-full">
          <Banner />
          <Timeline />
        </main>
        <Footer />
      </div>
    </div>
  );
}
