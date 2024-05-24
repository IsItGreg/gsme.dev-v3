import { GiMountedKnight, GiOstrich, GiWarpPipe } from "react-icons/gi";

export default function Contact() {
  return (
    <div id="contact" className="relative bg-stone-50 py-32">
      <div className="flex flex-col items-center gap-2">
        <div className="text-center text-4xl font-bold">Want to reach me?</div>
        <div className="h-1 w-56 rounded-sm bg-cyan-600"></div>
      </div>
      <div className="flex flex-row items-center justify-center gap-8 pt-16 text-lg">
        <a
          href="https://www.linkedin.com/in/greg-smelkov/"
          target="_blank"
          className="flex w-fit flex-row items-center gap-2 rounded-lg border border-blue-700 p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white hover:shadow-lg"
        >
          <GiMountedKnight className="h-10 w-10" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:hello@gsme.dev"
          target="_blank"
          className="flex w-fit flex-row items-center gap-2 rounded-lg border border-yellow-700 p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-700 hover:text-white hover:shadow-lg"
        >
          <GiOstrich className="h-10 w-10" />
          <span>Email</span>
        </a>
      </div>
      <div className="absolute bottom-0 right-20">
        <a
          href="#"
          className="mx-20 block text-green-700 opacity-25 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100"
        >
          <GiWarpPipe className="h-20 w-20" />
        </a>
      </div>
    </div>
  );
}
