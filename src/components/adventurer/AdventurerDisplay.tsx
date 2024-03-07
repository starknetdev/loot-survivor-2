import ItemsVertical from "../loot/ItemsVertical";
import InventoryVertical from "../loot/InventoryVertical";
import { Stats } from "./MainStats";
import { useAnimationStore } from "@/hooks/useAnimationStore";
import AttackAnimation from "../animations/Attack";
import { AdventurerIcon, BagIcon } from "../icons";
import { useState } from "react";
import { adventurerTest } from "@/types/test";

export const AdventurerDisplay = () => {
  const [inventory, setInventory] = useState(false);
  const { animations, toggleAnimation } = useAnimationStore();
  const isAdventurerAttackOn = animations["adventurerAttack"];
  const hpPercent = (20 / 100) * 100;
  const levelProgress = (80 / 100) * 100;
  return (
    <div className="relative flex flex-col h-full">
      <div className="absolute top-20 left-16 flex flex-col">
        <span className="text-2xl">testicus</span>
        <span className="text-xl">LVL:10</span>
        <span className="flex flex-col gap-5">
          <span className="flex flex-col gap-10 w-32 h-4 border border-terminal-silver">
            <span
              className="h-full bg-terminal-blue"
              style={{ width: `${levelProgress}%` }}
            />
          </span>
          <span className="flex flex-row border border-terminal-silver w-32 h-16">
            <span
              className={`flex flex-col items-center justify-center border border-terminal-silver ${
                inventory
                  ? "text-terminal-silver"
                  : "bg-terminal-silver text-terminal-black"
              } w-1/2 cursor-pointer`}
              onClick={() => setInventory(false)}
            >
              <span className="flex items-center justify-center w-8 h-2/3">
                <AdventurerIcon />
              </span>
              <span className="h-1/3 text-xs">Loadout</span>
            </span>
            <span
              className={`flex flex-col items-center justify-center border border-terminal-silver ${
                !inventory
                  ? "text-terminal-silver"
                  : "bg-terminal-silver text-terminal-black"
              } w-1/2 cursor-pointer`}
              onClick={() => setInventory(true)}
            >
              <span className="flex items-center justify-center w-6 h-2/3">
                <BagIcon />
              </span>
              <span className="h-1/3 text-xs">Inventory</span>
            </span>
          </span>
        </span>
      </div>
      <div className="absolute top-20 right-40 w-48 h-56 border p-2">
        <img
          src={
            new URL(
              `../../assets/adventurer/left-robe-adventurer.png`,
              import.meta.url
            ).href
          }
          alt="adventurer"
        />
        {isAdventurerAttackOn && (
          <AttackAnimation
            onAttackEnd={() => toggleAnimation("adventurerAttack")}
            type="adventurer"
          />
        )}
      </div>
      <div className="flex flex-row items-center gap-5 absolute top-80 right-40">
        <span className="text-lg font-bold">HP: 20</span>
        <span className="flex w-48 h-4 border border-terminal-silver">
          <span
            className="h-full bg-terminal-green"
            style={{ width: `${hpPercent}%` }}
          />
        </span>
      </div>
      {inventory ? (
        <div className="absolute bottom-0 right-0">
          <InventoryVertical adventurer={adventurerTest} />
        </div>
      ) : (
        <>
          <div className="absolute bottom-0 right-0">
            <ItemsVertical adventurer={adventurerTest} />
          </div>
          <div className="absolute bottom-40 left-40">
            <Stats />
          </div>
        </>
      )}
    </div>
  );
};
