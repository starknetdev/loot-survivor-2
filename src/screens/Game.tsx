import { useEffect, useState } from "react";
import useUIStore from "@/hooks/useUIStore";
import { AdventurerDisplay } from "@/components/adventurer/AdventurerDisplay";
import BeastDisplay from "@/components/beast/BeastDisplay";
import ExploreHistory from "@/components/explore/ExploreHistory";
import { PixelButton } from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import { Attack } from "@/types";
import { addEncounter } from "@/components/explore/getEncounter";
import { Button } from "@/components/Button";
import UpgradeContainer from "@/components/upgrade/Container";
import { useAnimationStore } from "@/hooks/useAnimationStore";
import useGameState from "@/hooks/useGameState";

interface ExploreButtonsProps {
  setInBattle: (value: boolean) => void;
  inBattle: boolean;
}

const ExploreButtons = () => {
  const { grid, setGrid, encounters, setEncounters } = useUIStore();
  console.log(encounters.length);
  return (
    <div className="w-1/2 flex flex-col gap-10">
      <span className="h-20">
        <PixelButton
          onClick={() =>
            addEncounter({
              encounter:
                encounters.length === 0
                  ? 1
                  : encounters.length === 1
                  ? 2
                  : encounters.length === 2
                  ? 3
                  : encounters.length === 3
                  ? 4
                  : 5,
              grid,
              setGrid,
              encounters,
              setEncounters,
            })
          }
        >
          <span className="h-full w-full flex items-center justify-center font-bold uppercase">
            Explore
          </span>
        </PixelButton>
      </span>
      <div className="flex flex-col">
        <span className="flex flex-row w-full items-center justify-between">
          <p className="uppercase">Till Death</p>
          <span className="w-10 h-10">
            <Checkbox />
          </span>
        </span>
      </div>
    </div>
  );
};

interface AttackButtonsProps {
  addAttack: any;
}

const AttackButtons = ({ addAttack }: AttackButtonsProps) => {
  const { toggleAnimation } = useAnimationStore();
  // const { gameSection, setGameSection } = useGameState();
  return (
    <div className="w-1/2 flex flex-col gap-10">
      <span className="h-20">
        <PixelButton onClick={() => addAttack(1)}>
          <span className="h-full w-full flex items-center justify-center font-bold uppercase">
            Attack
          </span>
        </PixelButton>
      </span>
      <span className="h-20">
        <PixelButton onClick={() => toggleAnimation("burning")}>
          <span className="h-full w-full flex items-center justify-center font-bold uppercase">
            Flee
          </span>
        </PixelButton>
      </span>
      <div className="flex flex-col">
        <span className="flex flex-row w-full items-center justify-between">
          <p className="uppercase">Till Death</p>
          <span className="w-10 h-10">
            <Checkbox />
          </span>
        </span>
      </div>
    </div>
  );
};

interface UpgradeButtonsProps {
  setUpgradeSection: (value: number) => void;
}

const UpgradeButtons = ({ setUpgradeSection }: UpgradeButtonsProps) => {
  const { gameSection, setGameSection } = useGameState();
  return (
    <div className="w-1/2 h-1/2 relative">
      <div className="h-full w-full flex flex-col gap-5 font-bold z-10 relative">
        <Button onClick={() => setUpgradeSection(0)}>
          <span className="h-full flex items-center justify-center border border-terminal-silver bg-terminal-black uppercase hover:bg-terminal-silver hover:text-terminal-black">
            Stats
          </span>
        </Button>
        <Button onClick={() => setUpgradeSection(1)}>
          <span className="h-full flex items-center justify-center border border-terminal-silver bg-terminal-black uppercase hover:bg-terminal-silver hover:text-terminal-black">
            Loot
          </span>
        </Button>
        <Button onClick={() => setGameSection("explore")}>
          <span className="h-full flex items-center justify-center bg-terminal-green uppercase">
            Upgrade
          </span>
        </Button>
      </div>
      <span className="absolute top-0 bottom-0 left-1/2 border-2 border-dotted border-gray-400 z-0" />
    </div>
  );
};

interface AddAttackProps {
  attack: Attack;
  attacks: Attack[];
  setAttacks: (value: Attack[]) => void;
}

function Game() {
  const { setScreen } = useUIStore();
  const { gameSection, setGameSection } = useGameState();
  const [upgradeSection, setUpgradeSection] = useState(0);
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const { toggleAnimation } = useAnimationStore();

  const { encounters } = useUIStore();

  useEffect(() => {
    if (encounters.length >= 5) {
      setGameSection("battle");
    }
  }, [encounters]);

  // useEffect(() => {
  //   if (attacks.length >= 1) {
  //     setInBattle(false);
  //     setInUpgrade(true);
  //   }
  // }, [attacks]);

  useEffect(() => {
    if (attacks.length >= 1) {
      toggleAnimation("beastAttack");
      toggleAnimation("adventurerAttack");
    }
  }, [attacks]);

  const addAttack = ({ attack }: AddAttackProps): void => {
    // Clone the current grid to avoid direct state mutation
    let newAttacks = [...attacks, attack];

    setAttacks(newAttacks);
  };

  return (
    <div className="flex flex-row h-[725px]">
      <div className="w-1/3">
        <AdventurerDisplay />
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center">
        {gameSection === "battle" ? (
          <AttackButtons addAttack={addAttack} />
        ) : gameSection === "upgrade" ? (
          <UpgradeButtons setUpgradeSection={setUpgradeSection} />
        ) : (
          <ExploreButtons />
        )}
      </div>
      <div className="w-1/3">
        {gameSection === "battle" ? (
          <BeastDisplay />
        ) : gameSection === "upgrade" ? (
          <UpgradeContainer upgradeSection={upgradeSection} />
        ) : (
          <ExploreHistory />
        )}
      </div>
    </div>
  );
}

export default Game;
