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
    <div className="sticky top-0 z-50 flex h-12 flex-row bg-green-950 px-2 py-2 text-white shadow-xl">
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
    </div>
  );
}
