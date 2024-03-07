import { ItemCardVertical } from "@/components/loot/ItemCard";
import { AdventurerClass } from "@/lib/classes";

interface InventoryVerticalProps {
  side?: string;
  adventurer: AdventurerClass;
}

const InventoryVertical = ({ side, adventurer }: InventoryVerticalProps) => {
  return (
    <div className="flex flex-row gap-10 z-10">
      <div
        className={`flex flex-col items-center gap-10 justify-end relative ${
          side === "right" && "order-2"
        }`}
      >
        <ItemCardVertical
          item={adventurer.bag.item1?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
        <ItemCardVertical
          item={adventurer.bag.item2?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
        <ItemCardVertical
          item={adventurer.bag.item3?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
      </div>
      <div
        className={`flex flex-col items-center gap-10 justify-end relative ${
          side === "right" && "order-2"
        }`}
      >
        <ItemCardVertical
          item={adventurer.bag.item4?.id}
          infoDirection={side !== "right" ? "left" : "right"}
        />
        <ItemCardVertical
          item={adventurer.bag.item5?.id}
          infoDirection={side !== "right" ? "left" : "right"}
        />
        <ItemCardVertical
          item={adventurer.bag.item6?.id}
          infoDirection={side !== "right" ? "left" : "right"}
        />
      </div>
      <div
        className={`flex flex-col items-center gap-10 relative ${
          side === "right" && "order-1"
        }`}
      >
        <ItemCardVertical
          item={adventurer.bag.item7?.id}
          infoDirection="right"
        />
        <ItemCardVertical
          item={adventurer.bag.item8?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
        <ItemCardVertical
          item={adventurer.bag.item9?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
        <ItemCardVertical
          item={adventurer.bag.item10?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
        <ItemCardVertical
          item={adventurer.bag.item11?.id}
          infoDirection={side !== "right" ? "right" : "left"}
        />
      </div>
    </div>
  );
};

export default InventoryVertical;
