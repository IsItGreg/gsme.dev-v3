import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Work from "./components/work";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
