import GoDown from "./goDown";
import PixelName from "./pixelName";

export default function Hero() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between bg-gradient-to-t from-green-900 to-green-950">
      <PixelName />
      <GoDown />
    </main>
  );
}
