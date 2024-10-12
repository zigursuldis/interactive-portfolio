import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-8 lg:mx-12">
      <Header />
      <main className="max-w-[1200px] grow"></main>
      <Footer />
    </div>
  );
}
