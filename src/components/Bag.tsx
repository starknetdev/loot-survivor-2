import LootBag from "@/assets/loot/7760.svg";
import { PixelButton } from "@/components/Button";
import { LootStats } from "@/components/LootStats";
import ItemsHorizontal from "./loot/ItemsHorizontal";
import useUIStore from "@/hooks/useUIStore";

export const Bag = () => {
  const { setScreen } = useUIStore();
  return (
    <PixelButton onClick={() => setScreen("adventurerInfo")}>
      <span className="h-full w-full px-10 flex flex-row items-center gap-10">
        <div className="relative border border-white border-4 border-solid h-5/6">
          <img src={LootBag} alt="Loot Bag" className="h-full" />
          <p className="absolute right-2 bottom-2 uppercase font-bold">
            Bag #1137
          </p>
        </div>
        <div className="flex flex-row gap-20 h-5/6">
          <LootStats />
          <ItemsHorizontal />
        </div>
      </span>
    </PixelButton>
  );
};
