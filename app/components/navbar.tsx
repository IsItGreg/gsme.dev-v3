import { letters } from "./pixelLetters";

export default function Navbar() {
  const shortName = [
    letters.altLowerG,
    letters.upperS,
    letters.upperM,
    letters.upperE,
  ];
  let tempOffset = 0;
  const shortNameCoords = shortName
    .map((letter) => {
      const coords = letter.points.map(([x, y]) => [x + tempOffset, y]);
      tempOffset += letter.width + 2;
      return coords;
    })
    .flat();

  return (
    <div className="sticky top-0 z-50 flex h-12 flex-row justify-between bg-green-950 px-2 py-2 text-white shadow-xl">
      <svg viewBox="0 0 140 40">
        {shortNameCoords.map(([x, y], index) => (
          <rect
            x={x * 10}
            y={y * 10}
            width={10}
            height={10}
            key={index}
            fill="currentColor"
          />
        ))}
      </svg>
      <div className="flex flex-row items-center gap-2 pr-0.5 sm:gap-8 sm:pr-4">
        <a
          href="#about"
          className="p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-blue-200"
        >
          About
        </a>
        <a
          href="#work"
          className="p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-red-200"
        >
          Work
        </a>
        <a
          href="#projects"
          className="p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-green-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:text-yellow-200"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
