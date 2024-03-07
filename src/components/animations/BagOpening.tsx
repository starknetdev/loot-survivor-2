import SpriteAnimator from "../SpriteAnimator";

const BagOpening = () => {
  return (
    <SpriteAnimator
      frameCount={7} // the number of frames in your sprite sheet
      frameWidth={1000} // the width of each frame
      frameHeight={1000} // the height of each frame
      frameDuration={500} // duration of each frame in milliseconds
      spriteSheet="/bag-sprites.png"
    />
  );
};

export default BagOpening;
