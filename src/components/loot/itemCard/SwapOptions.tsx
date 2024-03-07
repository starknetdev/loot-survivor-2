import { useState } from "react";
import { RightArrowIcon, TickIcon } from "@/components/icons";
import { ItemCardVertical } from "@/components/loot/ItemCard";
import Close from "@/assets/icons/close.png";

interface SwapOptionsProps {
  items: number[];
  setSwap: (value: boolean) => void;
}

const SwapOptions = ({ items, setSwap }: SwapOptionsProps) => {
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <>
      <div className="flex flex-row gap-2 items-center border border-terminal-silver bg-terminal-black rounded-md p-2">
        <ItemCardVertical item={items[itemIndex]} infoDirection="right" />
        <div className="flex flex-col gap-2 items-center">
          <span
            className="w-6 h-6 cursor-pointer"
            onClick={() => setSwap(false)}
          >
            <img src={Close} />
          </span>
          <div className="flex flex-col">
            <span
              className="bg-terminal-silver text-terminal-black w-8 h-8 cursor-pointer"
              onClick={() =>
                setItemIndex((prevIndex) => (prevIndex + 1) % items.length)
              }
            >
              <RightArrowIcon />
            </span>
            <span className="bg-terminal-black h-0.5 w-full" />
            <span className="bg-terminal-silver text-terminal-black w-8 h-8 cursor-pointer">
              <TickIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

interface ItemSwapOptionsProps {
  swapDirection: string;
  setSwap: (value: boolean) => void;
  items?: number[];
}

export const ItemSwapOptions = ({
  items,
  swapDirection,
  setSwap,
}: ItemSwapOptionsProps) => {
  switch (swapDirection) {
    case "right":
      return (
        <div className="absolute left-full -top-2 translate-x-12">
          {items ? (
            <SwapOptions items={items} setSwap={setSwap} />
          ) : (
            <span>No available items</span>
          )}
        </div>
      );
    case "left":
      return (
        <div className="absolute right-full -top-2 -translate-x-4">
          {items ? (
            <SwapOptions items={items} setSwap={setSwap} />
          ) : (
            <span>No available items</span>
          )}
        </div>
      );
  }
};
