import useUIStore from "@/hooks/useUIStore";
import { AdventurerCarousel } from "@/components/adventurer/AdventurerCarousel";
import { Input } from "@/components/inputs/input";
import { Button } from "@/components/Button";

interface WeaponBoxProps {
  image: string;
}

const WeaponBox = ({ image }: WeaponBoxProps) => {
  return (
    <span className="border w-40 cursor-pointer">
      <img src={new URL(`../assets/items-nb/${image}`, import.meta.url).href} />
    </span>
  );
};

function AdventurerInfo() {
  const { setScreen } = useUIStore();

  return (
    <div className="min-h-screen flex flex-col gap-20 h-full p-20">
      <h1 className="flex justify-center text-8xl font-bold text-terminal-silver uppercase">
        Adventurer Info
      </h1>
      <div className="w-full h-[500px] flex flex-row gap-10 mx-auto px-32">
        <div className="w-1/3 h-full">
          <AdventurerCarousel />
        </div>
        <div className="flex flex-col w-2/3 gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl">Name</h2>
            <Input className="h-10 px-2" />
          </div>
          <div className="flex items-center justify-center">
            <span className="w-32 h-10 text-3xl">
              <Button onClick={() => setScreen("game")}>
                <span className="flex items-center justify-center w-full h-full bg-terminal-silver text-terminal-black">
                  <p className="uppercase">Spawn</p>
                </span>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdventurerInfo;
