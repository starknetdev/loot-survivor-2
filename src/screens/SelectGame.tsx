import { PixelButton } from "@/components/Button";
import useUIStore from "@/hooks/useUIStore";
import BYOB from "@/assets/icons/byob.png";
import BYOGA from "@/assets/icons/byoga.png";

function SelectGame() {
  const { setScreen } = useUIStore();

  return (
    <div className="min-h-screen flex flex-col gap-20 h-full p-20">
      <h1 className="flex justify-center text-8xl font-bold text-terminal-silver uppercase">
        New Game
      </h1>
      <div className="w-2/3 h-[500px] flex flex-row gap-10 mx-auto">
        <span className="h-full w-1/2">
          <PixelButton onClick={() => setScreen("selectBag")}>
            <span className="h-full w-full items-center justify-center flex flex-col">
              <h2 className="text-6xl">BYOB</h2>
              <p>{"(Bring Your Own Bag)"}</p>
              <img src={BYOB} alt="BYOB" />
            </span>
          </PixelButton>
        </span>
        <span className="h-full w-1/2">
          <PixelButton>
            <span className="h-full w-full items-center justify-center flex flex-col">
              <h2 className="text-6xl">BYOGA</h2>
              <p>{"(Bring Your Own Genesis Adventurer)"}</p>
              <img src={BYOGA} alt="BYOB" />
            </span>
          </PixelButton>
        </span>
      </div>
    </div>
  );
}

export default SelectGame;
