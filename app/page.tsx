import Footer from "@/components/footer";
import Header from "@/components/header";
import Timeline from "@/components/timeline/timeline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-8 lg:mx-12">
      <Header />
      <main className="max-w-[1200px] grow">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
