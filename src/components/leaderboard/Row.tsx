import { useUiSounds, soundSelector } from "@/hooks/useUISounds";
import { Adventurer } from "@/types";
import { LordsIcon } from "../icons";
import { calculateLevel } from "@/utils";
import {
  CharismaIcon,
  DexterityIcon,
  IntelligenceIcon,
  StrengthIcon,
  VitalityIcon,
  WisdomIcon,
  LuckIcon,
} from "../icons";
import ItemsHorizontal from "../loot/ItemsHorizontal";
import { AdventurerClass } from "@/lib/classes";

const Stats = () => {
  return (
    <div className="flex flex-col gap-1 items-center text-xs">
      <span className="flex flex-row items-center gap-2">
        <span className="flex flex-row items-center gap-1">
          <span className="w-5 h-5 text-terminal-silver">
            <CharismaIcon />
          </span>
          <p>CHA: 0</p>
        </span>
        <span className="flex flex-row items-center gap-1">
          <span className="w-4 h-4 text-terminal-silver">
            <DexterityIcon />
          </span>
          <p>DEX: 0</p>
        </span>
      </span>
      <span className="flex flex-row items-center gap-2">
        <span className="flex flex-row items-center gap-1">
          <span className="w-5 h-5 text-terminal-silver">
            <IntelligenceIcon />
          </span>
          <p>INT: 0</p>
        </span>
        <span className="flex flex-row items-center gap-1">
          <span className="w-5 h-5 text-terminal-silver">
            <StrengthIcon />
          </span>
          <p>STR: 0</p>
        </span>
      </span>
      <span className="flex flex-row items-center gap-2">
        <span className="flex flex-row items-center gap-1">
          <span className="w-5 h-5 text-terminal-silver">
            <VitalityIcon />
          </span>
          <p>VIT: 0</p>
        </span>
        <span className="flex flex-row items-center gap-1">
          <span className="w-5 h-5 text-terminal-silver">
            <WisdomIcon />
          </span>
          <p>WIS: 0</p>
        </span>
      </span>
      <span className="flex flex-row items-center gap-1">
        <span className="w-5 h-5 text-terminal-silver">
          <LuckIcon />
        </span>
        <p>LUCK: 0</p>
      </span>
    </div>
  );
};

interface LeaderboardRowProps {
  adventurer: AdventurerClass;
  handleRowSelected: (id: number) => void;
}

const LeaderboardRow = ({
  adventurer,
  handleRowSelected,
}: LeaderboardRowProps) => {
  const { play: clickPlay } = useUiSounds(soundSelector.click);
  return (
    <div className="flex flex-row gap-5 items-center px-20">
      <span className="text-4xl">1.</span>
      <div
        className="flex flex-row items-center gap-20 px-5 text-center border border-terminal-silver hover:bg-terminal-green hover:text-terminal-black cursor-pointer xl:text-lg 2xl:text-xl h-full w-full relative"
        onClick={() => {
          handleRowSelected(adventurer.id ?? 0);
          clickPlay();
        }}
      >
        <span className="flex w-32 items-center justify-center h-full">
          <img
            src={
              new URL(
                `../../assets/adventurer/left-robe-adventurer.png`,
                import.meta.url
              ).href
            }
            className="w-20 h-full object-contains"
            alt="adventurer"
          />
        </span>
        <span className="flex flex-col text-start leading-none">
          <span>{`${adventurer.name} - ${adventurer.id}`}</span>
          <span>XP: {adventurer?.xp}</span>
          <span>GOLD: {adventurer?.gold}</span>
          <span>LVL: {calculateLevel(adventurer.xp ?? 0)}</span>
        </span>
        <Stats />
        <ItemsHorizontal leaderboard={true} />
        {/* <span>
        {((adventurer.totalPayout as number) ?? 0) > 0 ? (
          <span className="flex flex-row gap-1 items-center justify-center">
            <span className="w-4 h-4">
              <LordsIcon />
            </span>
          </span>
        ) : (
          "-"
        )}
      </span> */}
      </div>
      <span className="flex flex-row items-center gap-2 text-2xl">
        <span className="w-8 h-8 text-terminal-silver">
          <LordsIcon />
        </span>
        <span>2.6k</span>
      </span>
    </div>
  );
};

export default LeaderboardRow;
