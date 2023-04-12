import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
  <div className="w-full relative h-screen flex flex-col items-center overflow-x-hidden background">
  <h1 className="bg-white  w-11/12  text-center rounded-sm mt-[40px] mx-auto px-10 font-bold py-2 overflow-hidden">Random gifs</h1>
  <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
    <Random />
    <Tag />
  </div>
  </div>
  );
}
