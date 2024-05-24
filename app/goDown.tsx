import { GiDrakkar } from "react-icons/gi";

export default function GoDown() {
  return (
    <a
      href="#about"
      className="animate-appear my-20 text-white opacity-50 transition-all duration-500 ease-in-out hover:rotate-45 hover:scale-105 hover:opacity-100"
    >
      <GiDrakkar className=" h-20 w-20 " />
    </a>
  );
}
