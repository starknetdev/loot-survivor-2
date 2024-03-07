import { SwapIcon, DropIcon, QuestionMarkIcon } from "../icons";
import { GameData } from "@/utils/data";
import EfficacyDisplay from "../icons/EfficacyIcon";
import { useState } from "react";
import { ItemInfoBox } from "./itemCard/ItemInfo";
import { ItemSwapOptions } from "./itemCard/SwapOptions";

export type Slot =
  | "weapon"
  | "head"
  | "chest"
  | "waist"
  | "hands"
  | "feet"
  | "ring"
  | "necklace";

interface ItemCardProps {
  item?: number;
  infoDirection: string;
  swappable?: boolean;
  leaderboard?: boolean;
}

export const ItemCardHorizontal = ({
  item,
  infoDirection,
  leaderboard,
}: ItemCardProps) => {
  const gameData = new GameData();
  return (
    <div className="group relative z-10">
      <div
        className={`border border-white ${
          leaderboard ? "w-10 h-10" : "w-20 h-20"
        } bg-terminal-black relative cursor-pointer`}
      >
        <img
          src={
            new URL(
              `../../assets/items-nb/${gameData.ITEM_IMAGES_IDS[item ?? 0]}`,
              import.meta.url
            ).href
          }
        />
      </div>
      <ItemInfoBox
        infoDirection={infoDirection}
        item={item}
        leaderboard={leaderboard}
      />
    </div>
  );
};

export const ItemCardVertical = ({
  item,
  infoDirection,
  swappable,
}: ItemCardProps) => {
  const [swap, setSwap] = useState(false);
  const gameData = new GameData();
  const swapItems = [40, 41];
  return (
    <div className="flex flex-row relative z-10">
      <div className="flex flex-row group relative">
        <div className="flex flex-row border border-white w-24 h-24 bg-terminal-black relative cursor-pointer">
          {item ? (
            <img
              src={
                new URL(
                  `../../assets/items-nb/${
                    gameData.ITEM_IMAGES_IDS[item ?? 0]
                  }`,
                  import.meta.url
                ).href
              }
            />
          ) : (
            <span className="flex justify-center items-center w-1/2 h-full m-auto">
              <QuestionMarkIcon />
            </span>
          )}
        </div>
        <ItemInfoBox item={item} infoDirection={infoDirection} />
      </div>
      <div className="flex flex-col items-center justify-between border border-white w-8 relative text-sm font-bold bg-terminal-black">
        <div className="flex flex-col items-center relative text-sm">
          <span>{`T${gameData.ITEM_TIERS_IDS[item ?? 0] ?? "?"}`}</span>
          <span>L20</span>
          <span className="w-4 h-4 flex items-center justify-center">
            <EfficacyDisplay type={gameData.ITEM_TYPES[item ?? 0]} />
          </span>
        </div>
        <div className="flex flex-col w-full relative">
          {swappable && (
            <button
              className="flex items-center justify-center w-full h-4 bg-terminal-silver text-terminal-black"
              onClick={() => setSwap(true)}
            >
              <span className="w-3 h-3">
                <SwapIcon />
              </span>
            </button>
          )}
          <span className="bg-terminal-black h-[1px] w-full" />
          <button className="flex items-center justify-center w-full h-4 bg-terminal-silver text-terminal-black">
            <span className="w-5 h-5">
              <DropIcon />
            </span>
          </button>
        </div>
      </div>
      {swap && (
        <>
          <div className="absolute inset-0 bg-terminal-black-blur z-20" />
          <ItemSwapOptions
            items={swapItems}
            swapDirection={infoDirection}
            setSwap={setSwap}
          />
        </>
      )}
    </div>
  );
};
