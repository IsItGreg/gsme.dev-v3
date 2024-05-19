import PixelName from "./pixelName";

export default function Hero() {
  return (
    // <main className="h-screen flex justify-center items-center bg-green-950">
    //   <div className="flex-col justify-center items-center text-center">
    //     <h1 className="text-3xl font-medium text-white">Gregory Smelkov</h1>
    //     <h2 className="text-xl text-stone-200">Frontend Engineer</h2>
    //   </div>
    // </main>
    <main className="h-screen w-screen bg-green-950">
      <PixelName />
      {/* <div className="flex h-full w-full flex-col items-center justify-center font-mono text-5xl font-extrabold lowercase text-white">
        <div className="">Gregory</div>
        <div className="">Smelkov</div>
      </div> */}
    </main>
  );
}
