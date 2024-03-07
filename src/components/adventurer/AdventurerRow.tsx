import LootBag from "@/assets/loot/7760.svg";
import { PixelButton } from "@/components/Button";
import { LootStats } from "@/components/LootStats";
import ItemsHorizontal from "../loot/ItemsHorizontal";
import useUIStore from "@/hooks/useUIStore";
import {
  CharismaIcon,
  DexterityIcon,
  IntelligenceIcon,
  StrengthIcon,
  VitalityIcon,
  WisdomIcon,
  SkullIcon,
} from "@/components/icons";

export const AdventurerRow = () => {
  const { setScreen } = useUIStore();
  const levelProgress = (80 / 100) * 100;
  const hpPercent = 20;
  const dead = true;
  return (
    <PixelButton onClick={() => setScreen("game")}>
      <div className="h-full w-full px-10 flex flex-row items-center justify-between">
        <div className="relative h-5/6">
          <img
            src={
              new URL(
                `../../assets/adventurer/left-robe-adventurer.png`,
                import.meta.url
              ).href
            }
            className="h-full"
            alt="adventurer-image"
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <span className="text-2xl">testicus</span>
          <div className="flex flex-row items-center gap-2 text-xl font-bold">
            <span>Level:</span>
            <span>10</span>
            <span className="flex flex-col gap-10 w-32 h-4 border border-terminal-silver">
              <span
                className="h-full bg-terminal-blue"
                style={{ width: `${levelProgress}%` }}
              />
            </span>
            <span>11</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">HP: 20</span>
            <span className="flex w-48 h-4 border border-terminal-silver">
              <span
                className="h-full bg-terminal-green"
                style={{ width: `${hpPercent}%` }}
              />
            </span>
          </div>
          <span className="flex flex-row gap-2 text-xl font-bold">
            GOLD: <span className="text-terminal-orange">20</span>
          </span>
        </div>
        <div className="flex flex-col w-40 gap-2">
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center gap-2 text-terminal-silver">
              <span className="w-5 h-5">
                <CharismaIcon />
              </span>
              <p>CHARISMA:</p>
            </span>
            <p>0</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center gap-2 text-terminal-silver">
              <span className="w-4 h-4">
                <DexterityIcon />
              </span>
              <p>CHARISMA:</p>
            </span>
            <p>0</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center gap-2 text-terminal-silver">
              <span className="w-5 h-5">
                <IntelligenceIcon />
              </span>
              <p>INTELLIGENCE:</p>
            </span>
            <p>0</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center gap-2 text-terminal-silver">
              <span className="w-5 h-5">
                <StrengthIcon />
              </span>
              <p>STRENGTH:</p>
            </span>
            <p>0</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center gap-2 text-terminal-silver">
              <span className="w-5 h-5">
                <VitalityIcon />
              </span>
              <p>VITALITY:</p>
            </span>
            <p>0</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="flex flex-row items-center gap-2 text-terminal-silver">
              <span className="w-5 h-5">
                <WisdomIcon />
              </span>
              <p>WISDOM:</p>
            </span>
            <p>0</p>
          </div>
        </div>
        <ItemsHorizontal />
      </div>
      {dead && (
        <div className="absolute flex items-center justify-center inset-0 bg-terminal-black-blur w-full h-full z-20">
          <span className="flex justify-center h-2/3">
            <SkullIcon />
          </span>
        </div>
      )}
    </PixelButton>
  );
};
