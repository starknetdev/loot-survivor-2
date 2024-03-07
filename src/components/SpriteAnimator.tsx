import React, { useRef, useEffect } from "react";

interface SpriteAnimatorProps {
  spriteSheet: string;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  frameDuration: number;
  infinite?: boolean;
  clearAfterEnd?: boolean;
  onAnimationComplete?: () => void;
}

const SpriteAnimator: React.FC<SpriteAnimatorProps> = ({
  spriteSheet,
  frameCount,
  frameWidth,
  frameHeight,
  frameDuration,
  infinite,
  clearAfterEnd,
  onAnimationComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const spriteImage = new Image();
    spriteImage.src = spriteSheet;

    const updateAnimation = () => {
      if (ctx) {
        // Determine if the animation should stop or clear after ending
        if (!infinite && frameRef.current >= frameCount) {
          if (clearAfterEnd) {
            ctx.clearRect(0, 0, frameWidth, frameHeight); // Clear the canvas
          }
          clearInterval(intervalRef.current as number);
          onAnimationComplete && onAnimationComplete();
          return;
        }

        // Calculate the current frame to draw
        const currentFrame = frameRef.current % frameCount;

        // Clear the canvas and draw the current frame
        ctx.clearRect(0, 0, frameWidth, frameHeight);
        ctx.drawImage(
          spriteImage,
          currentFrame * frameWidth,
          0,
          frameWidth,
          frameHeight,
          0,
          0,
          frameWidth,
          frameHeight
        );

        // Move to the next frame
        frameRef.current += 1;
      }
    };

    intervalRef.current = window.setInterval(updateAnimation, frameDuration);

    // Clean up the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    frameCount,
    frameWidth,
    frameHeight,
    frameDuration,
    infinite,
    clearAfterEnd,
  ]);

  return <canvas ref={canvasRef} width={frameWidth} height={frameHeight} />;
};

export default SpriteAnimator;
