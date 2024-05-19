import Image from "next/image";
import Hero from "./hero";
import Timeline from "./timeline";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <div className="h-[3000px]"></div>
      <Timeline />
    </>
  );
}
