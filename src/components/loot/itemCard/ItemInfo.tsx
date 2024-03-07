import { GameData } from "@/utils/data";
import EfficacyDisplay from "@/components/icons/EfficacyIcon";

interface ItemInfoProps {
  item?: number;
  leaderboard?: boolean;
}

const ItemInfo = ({ item, leaderboard }: ItemInfoProps) => {
  const gameData = new GameData();
  return (
    <div
      className={`border border-terminal-silver bg-terminal-black text-terminal-silver rounded-md w-full h-full flex flex-col justify-between p-2 ${
        leaderboard && "text-sm"
      }`}
    >
      <p>{"“AGONY BANE” GREAT HELM OF POWER +1"}</p>
      <span className="flex flex-row justify-between">
        <span className="flex flex-col items-center">
          <span>Tier 1</span>
          <span>Level 20</span>
          <span className="w-5 h-5 flex items-center justify-center">
            <EfficacyDisplay type={gameData.ITEM_TYPES[item ?? 0]} />
          </span>
        </span>
        <span className="flex flex-col items-center">
          <span>Base DMG: 20</span>
          <span className="flex flex-row">
            <span>Strong:</span>
            <span className="w-5 h-5 flex items-center justify-center">
              <EfficacyDisplay
                type={
                  gameData.ITEM_EFFICACIES_STRONG[
                    gameData.ITEM_TYPES[item ?? 0]
                  ]
                }
              />
            </span>
          </span>
          <span className="flex flex-row">
            <span>Weak:</span>
            <span className="w-5 h-5 flex items-center justify-center">
              <EfficacyDisplay
                type={
                  gameData.ITEM_EFFICACIES_WEAK[gameData.ITEM_TYPES[item ?? 0]]
                }
              />
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

interface ItemInfoBoxProps {
  item?: number;
  infoDirection: string;
  leaderboard?: boolean;
}

export const ItemInfoBox = ({
  item,
  infoDirection,
  leaderboard,
}: ItemInfoBoxProps) => {
  switch (infoDirection) {
    case "top":
      return (
        <div className="absolute top-0 left-0 hidden group-hover:flex p-2 mt-2 -translate-y-48 -translate-x-20 h-40 w-64 z-20">
          <ItemInfo item={item} leaderboard={leaderboard} />
        </div>
      );
    case "bottom":
      return (
        <div className="absolute top-0 left-0 hidden group-hover:block p-2 mt-2 translate-y-20 -translate-x-20 h-40 w-64 z-20">
          <ItemInfo item={item} leaderboard={leaderboard} />
        </div>
      );
    case "right":
      return (
        <div className="absolute -top-8 left-full translate-x-12 hidden group-hover:block h-40 w-64 z-20">
          <ItemInfo item={item} leaderboard={leaderboard} />
        </div>
      );
    case "left":
      return (
        <div className="absolute -top-8 right-full -translate-x-4 hidden group-hover:block h-40 w-64 z-20">
          <ItemInfo item={item} leaderboard={leaderboard} />
        </div>
      );
  }
};
