import { ItemCardVertical } from "@/components/loot/ItemCard";
import { AdventurerClass } from "@/lib/classes";

interface ItemsVerticalProps {
  side?: string;
  adventurer: AdventurerClass;
}

const ItemsVertical = ({ side, adventurer }: ItemsVerticalProps) => {
  return (
    <div className="flex flex-row gap-10 z-10">
      <div
        className={`flex flex-col items-center gap-10 justify-end relative ${
          side === "right" && "order-2"
        }`}
      >
        <ItemCardVertical
          item={adventurer.hand.id}
          infoDirection={side !== "right" ? "left" : "right"}
          swappable={true}
        />
        <ItemCardVertical
          item={adventurer.ring.id}
          infoDirection={side !== "right" ? "left" : "right"}
          swappable={true}
        />
        <ItemCardVertical
          item={adventurer.foot.id}
          infoDirection={side !== "right" ? "left" : "right"}
          swappable={true}
        />
        <div className="h-[50%] w-1 bg-white absolute" />
      </div>
      <div
        className={`flex flex-col items-center gap-10 relative ${
          side === "right" && "order-1"
        }`}
      >
        <ItemCardVertical
          item={adventurer.head.id}
          infoDirection="right"
          swappable={true}
        />
        <div className="h-full w-1 bg-white absolute" />
        <ItemCardVertical
          item={adventurer.neck.id}
          infoDirection={side !== "right" ? "right" : "left"}
          swappable={true}
        />
        <div className="relative">
          <ItemCardVertical
            item={adventurer.chest.id}
            infoDirection={side !== "right" ? "right" : "left"}
            swappable={true}
          />
          <div
            className={`w-full h-1 bg-white absolute top-1/2 ${
              side !== "right" ? "right-0" : "left-0"
            } ${side !== "right" ? "-translate-x-24" : "translate-x-24"}`}
          />
        </div>
        <div className="relative">
          <ItemCardVertical
            item={adventurer.waist.id}
            infoDirection={side !== "right" ? "right" : "left"}
            swappable={true}
          />
          <div
            className={`w-full h-1 bg-white absolute top-1/2 ${
              side !== "right" ? "right-0" : "left-0"
            } ${side !== "right" ? "-translate-x-24" : "translate-x-24"}`}
          />
        </div>
        <div className="relative">
          <ItemCardVertical
            item={adventurer.foot.id}
            infoDirection={side !== "right" ? "right" : "left"}
            swappable={true}
          />
          <div
            className={`w-full h-1 bg-white absolute top-1/2 ${
              side !== "right" ? "right-0" : "left-0"
            } ${side !== "right" ? "-translate-x-24" : "translate-x-24"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsVertical;
