"use client";

import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useSprings,
} from "@react-spring/web";
import { letters } from "./pixelLetters";

const GRID_STROKE_WIDTH = 0.5;
const OFFSET = GRID_STROKE_WIDTH / 2;

const GRID_BOX_SIZE = 10;

const GRID_WIDTH = 28;
const GRID_HEIGHT = 13;

const MAX_WIDTH = GRID_WIDTH * GRID_BOX_SIZE + OFFSET * 2;
const MAX_HEIGHT = GRID_HEIGHT * GRID_BOX_SIZE + OFFSET * 2;

export default function PixelName() {
  const firstName = [
    letters.upperG,
    letters.lowerR,
    letters.lowerE,
    letters.lowerG,
    letters.lowerO,
    letters.lowerR,
    letters.lowerY,
  ];
  let tempOffset = 1;
  const firstNameCoords = firstName
    .map((letter) => {
      const coords = letter.points.map(([x, y]) => [x + tempOffset, y + 1]);
      tempOffset += letter.width + 2;
      return coords;
    })
    .flat();

  const lastName = [
    letters.upperS,
    letters.lowerM,
    letters.lowerE,
    letters.lowerL,
    letters.lowerK,
    letters.lowerO,
    letters.lowerV,
  ];
  tempOffset = 1;
  const lastNameCoords = lastName
    .map((letter) => {
      const coords = letter.points.map(([x, y]) => [x + tempOffset, y + 8]);
      tempOffset += letter.width + 2;
      return coords;
    })
    .flat();

  const gridInRef = useSpringRef();
  const gridOutRef = useSpringRef();

  const horizontalLines = new Array(GRID_HEIGHT + 1).fill(null).map((_, i) => ({
    inSpring: useSpring({
      from: { x2: 0 },
      to: { x2: MAX_WIDTH },
      delay: i * 100,
      ref: gridInRef,
    }),
    outSpring: useSpring({
      from: { x1: 0 },
      to: { x1: MAX_WIDTH },
      delay: i * 100,
      ref: gridOutRef,
    }),
  }));

  const verticalLines = new Array(GRID_WIDTH + 1).fill(null).map((_, i) => ({
    inSpring: useSpring({
      from: { y2: 0 },
      to: { y2: MAX_HEIGHT },
      delay: i * 50,
      ref: gridInRef,
    }),
    outSpring: useSpring({
      from: { y1: 0 },
      to: { y1: MAX_HEIGHT },
      delay: i * 50,
      ref: gridOutRef,
    }),
  }));

  const firstNameRef = useSpringRef();
  const [firstNameSprings] = useSprings(firstNameCoords.length, (i) => {
    return {
      ref: firstNameRef,
      from: { scale: 0 },
      to: { scale: 1 },
      delay: i * 50,
      config: {
        mass: 2,
        tension: 220,
      },
    };
  });

  const lastNameRef = useSpringRef();
  const [lastNameSprings] = useSprings(lastNameCoords.length, (i) => {
    return {
      ref: lastNameRef,
      from: { scale: 0 },
      to: { scale: 1 },
      delay: i * 50,
      config: {
        mass: 2,
        tension: 220,
      },
    };
  });
  useChain(
    [gridInRef, firstNameRef, lastNameRef, gridOutRef],
    [0, 0.25, 0.75, 1.5],
  );

  return (
    <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 text-stone-50">
      <svg
        viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}
        shapeRendering="crispEdges"
      >
        <g>
          {horizontalLines.map(({ inSpring, outSpring }, i) => (
            <animated.line
              key={i}
              x1={outSpring.x1}
              y1={i * GRID_BOX_SIZE + OFFSET}
              x2={inSpring.x2}
              y2={i * GRID_BOX_SIZE + OFFSET}
              strokeWidth={GRID_STROKE_WIDTH}
              stroke="currentColor"
            />
          ))}
          {verticalLines.map(({ inSpring, outSpring }, i) => (
            <animated.line
              key={i}
              x1={i * GRID_BOX_SIZE + OFFSET}
              y1={outSpring.y1}
              x2={i * GRID_BOX_SIZE + OFFSET}
              y2={inSpring.y2}
              strokeWidth={GRID_STROKE_WIDTH}
              stroke="currentColor"
            />
          ))}
        </g>
        <g>
          {firstNameSprings.map(({ scale }, i) => (
            <animated.rect
              key={i}
              x={firstNameCoords[i][0] * GRID_BOX_SIZE}
              y={firstNameCoords[i][1] * GRID_BOX_SIZE}
              width={GRID_BOX_SIZE}
              height={GRID_BOX_SIZE}
              fill="currentColor"
              transform={scale.to((s) => `scale(${s})`)}
            />
          ))}
          {lastNameSprings.map(({ scale }, i) => (
            <animated.rect
              key={i}
              x={lastNameCoords[i][0] * GRID_BOX_SIZE}
              y={lastNameCoords[i][1] * GRID_BOX_SIZE}
              width={GRID_BOX_SIZE}
              height={GRID_BOX_SIZE}
              fill="currentColor"
              transform={scale.to((s) => `scale(${s})`)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
