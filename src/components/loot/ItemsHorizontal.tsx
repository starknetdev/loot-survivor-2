import React from "react";
import { ItemCardHorizontal } from "@/components/loot/ItemCard";

interface ItemsHorizontalProps {
  leaderboard?: boolean;
}

const ItemsHorizontal = ({ leaderboard }: ItemsHorizontalProps) => {
  return (
    <div className={`flex flex-col justify-between ${leaderboard && "gap-2"}`}>
      <div className="flex flex-row items-center gap-5 relative">
        <ItemCardHorizontal
          item={82}
          infoDirection="top"
          leaderboard={leaderboard}
        />
        <div
          className={`w-full ${
            leaderboard ? "h-0.5" : "h-1"
          } bg-white absolute`}
        />
        <ItemCardHorizontal
          item={2}
          infoDirection="top"
          leaderboard={leaderboard}
        />
        <div className="relative">
          <ItemCardHorizontal
            item={80}
            infoDirection="top"
            leaderboard={leaderboard}
          />
          <div className={`w-1 h-full bg-white absolute left-1/2`} />
        </div>
        <div className="relative">
          <ItemCardHorizontal
            item={31}
            infoDirection="top"
            leaderboard={leaderboard}
          />
          <div className="w-1 h-full bg-white absolute left-1/2" />
        </div>
        <div className="relative">
          <ItemCardHorizontal
            item={34}
            infoDirection="top"
            leaderboard={leaderboard}
          />
          <div className="w-1 h-full bg-white absolute left-1/2" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 justify-end relative">
        <ItemCardHorizontal
          item={41}
          infoDirection="bottom"
          leaderboard={leaderboard}
        />
        <ItemCardHorizontal
          item={5}
          infoDirection="bottom"
          leaderboard={leaderboard}
        />
        <ItemCardHorizontal
          item={42}
          infoDirection="bottom"
          leaderboard={leaderboard}
        />
        <div className="w-[50%] h-1 bg-white absolute" />
      </div>
    </div>
  );
};

export default ItemsHorizontal;
