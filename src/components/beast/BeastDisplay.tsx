import ItemsVertical from "../loot/ItemsVertical";
import AttackAnimation from "../animations/Attack";
import { useAnimationStore } from "@/hooks/useAnimationStore";
import SmokeAnimation from "../animations/Smoke";
import useGameState from "@/hooks/useGameState";
import { adventurerTest } from "@/types/test";

const BeastDisplay = () => {
  const { animations, toggleAnimation } = useAnimationStore();
  const { gameSection, setGameSection } = useGameState();
  const isBeastAttackOn = animations["beastAttack"];
  const isBurningOn = animations["burning"];
  const hpPercent = (20 / 100) * 100;
  return (
    <div className="relative flex flex-col h-full">
      {!isBurningOn && (
        <>
          <div className="absolute top-20 right-32 flex flex-col">
            <span className="text-2xl">Vampire</span>
            <span className="text-xl">LVL:10</span>
          </div>
          <div className="absolute top-20 left-40 w-48 h-56 border p-2">
            <img
              src={
                new URL(`../../assets/beasts-nb/vampire.png`, import.meta.url)
                  .href
              }
              alt="adventurer"
            />
            {isBeastAttackOn && (
              <AttackAnimation
                onAttackEnd={() => toggleAnimation("beastAttack")}
                type="beast"
              />
            )}
          </div>
          <div className="flex flex-row items-center gap-5 absolute top-80 left-40">
            <span className="flex w-48 h-4 border border-terminal-silver">
              <span
                className="h-full bg-terminal-green"
                style={{ width: `${hpPercent}%` }}
              />
            </span>
            <span className="text-lg font-bold">HP: 20</span>
          </div>
          <div className="absolute bottom-0 left-0">
            <ItemsVertical side="right" adventurer={adventurerTest} />
          </div>
        </>
      )}
      {isBurningOn && (
        <div>
          <SmokeAnimation
            onSmokeEnd={() => {
              setGameSection("explore");
              toggleAnimation("burning");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BeastDisplay;
