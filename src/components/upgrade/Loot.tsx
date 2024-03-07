import { GameData } from "@/utils/data";
import StatDisplay from "../icons/StatIcon";
import { Button } from "../Button";
import ItemDisplay from "../icons/LootIcon";

type Stat =
  | "charisma"
  | "dexterity"
  | "intelligence"
  | "strength"
  | "vitality"
  | "wisdom"
  | "luck";

interface ItemCardProps {
  item: number;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const gameData = new GameData();
  return (
    <div className="flex flex-col">
      <span className="w-20 h-20 border border-terminal-silver bg-terminal-black">
        <img
          src={
            new URL(
              `../../assets/items-nb/${gameData.ITEM_IMAGES_IDS[item ?? 0]}`,
              import.meta.url
            ).href
          }
        />
      </span>
      <span className="flex flex-row items-center justify-center bg-terminal-silver text-terminal-black px-2">
        <span className="w-1/2">20</span>
        <span className="w-1/2 h-full">
          <Button>
            <span className="flex items-center justify-center w-full h-3/4 uppercase bg-terminal-black text-terminal-silver">
              Buy
            </span>
          </Button>
        </span>
      </span>
    </div>
  );
};

const Loot = () => {
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="absolute left-5 bottom-5 flex flex-col gap-5 items-center justify-end text-2xl font-bold w-20 ml-2">
        <span className="flex items-center justify-center w-12 h-12 border bg-terminal-silver rounded-md text-terminal-black cursor-pointer ">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="weapon" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="chest" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="head" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="waist" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="foot" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-5 h-8">
            <ItemDisplay type="hand" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="ring" />
          </span>
        </span>
        <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <span className="flex items-center justify-center w-8 h-8">
            <ItemDisplay type="neck" />
          </span>
        </span>
      </div>
      <div className="absolute top-5 right-5 flex flex-row items-center justify-between w-2/3 text-2xl font-bold">
        <span className="w-12 h-12 flex items-center justify-center border bg-terminal-silver rounded-md text-terminal-black cursor-pointer">
          T1
        </span>
        <span className="w-12 h-12 flex items-center justify-center cursor-pointer">
          T2
        </span>
        <span className="w-12 h-12 flex items-center justify-center cursor-pointer">
          T3
        </span>
        <span className="w-12 h-12 flex items-center justify-center cursor-pointer">
          T4
        </span>
        <span className="w-12 h-12 flex items-center justify-center cursor-pointer">
          T5
        </span>
      </div>
      <div className="absolute bottom-5 right-5 h-5/6 grid grid-cols-4 gap-5 overflow-scroll">
        {items.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))}
      </div>
      <span className="absolute top-0 left-0"></span>
    </>
  );
};

export default Loot;
