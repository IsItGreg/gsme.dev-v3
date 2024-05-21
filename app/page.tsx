import Image from "next/image";
import Hero from "./hero";
import Timeline from "./timeline";
import Navbar from "./navbar";
import About from "./about";
import Work from "./work";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Work />
      <Timeline />
      <div className="h-[3000px]"></div>
    </>
  );
}
