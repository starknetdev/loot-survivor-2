import SpriteAnimator from "../SpriteAnimator";
import DamageNumber from "./Damage";

type Type = "adventurer" | "beast";

interface AttackAnimationProps {
  onAttackEnd: () => void;
  type: Type;
}

const AttackAnimation = ({ onAttackEnd, type }: AttackAnimationProps) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center bg-terminal-black-blur">
      <SpriteAnimator
        frameCount={5} // the number of frames in your sprite sheet
        frameWidth={192} // the width of each frame
        frameHeight={192} // the height of each frame
        frameDuration={200} // duration of each frame in milliseconds
        spriteSheet="src/assets/animations/slash-2.png"
        infinite={false}
        clearAfterEnd={true}
        onAnimationComplete={onAttackEnd}
      />
      <DamageNumber
        amount={20}
        onRemove={() => null}
        direction={type === "beast" ? "right" : "left"}
      />
    </div>
  );
};

export default AttackAnimation;
