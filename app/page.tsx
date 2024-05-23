import Image from "next/image";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "./about";
import Work from "./work";
import Projects from "./projects";
import Contact from "./contact";

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
