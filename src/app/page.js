import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="bg-purple-900">
      <div>
        <Hero />
        <About />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
