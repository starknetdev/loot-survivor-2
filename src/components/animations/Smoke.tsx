import SpriteAnimator from "../SpriteAnimator";

interface SmokeAnimationProps {
  onSmokeEnd: () => void;
}

const SmokeAnimation = ({ onSmokeEnd }: SmokeAnimationProps) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center bg-terminal-black-blur">
      <SpriteAnimator
        frameCount={6} // the number of frames in your sprite sheet
        frameWidth={240} // the width of each frame
        frameHeight={384} // the height of each frame
        frameDuration={200} // duration of each frame in milliseconds
        spriteSheet="src/assets/animations/burning-loop.png"
        infinite={false}
        clearAfterEnd={true}
        onAnimationComplete={onSmokeEnd}
      />
    </div>
  );
};

export default SmokeAnimation;
