import React, { useRef, useEffect, ReactNode } from "react";
import { drawNineSliceImage } from "@/utils/nineSliceImage";
import { soundSelector, useUiSounds } from "@/hooks/useUISounds";
import { PixelBorder } from "./PixelBorder";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const { play } = useUiSounds(soundSelector.click);

  return (
    <button
      onClick={(event) => {
        onClick?.(event);
        play();
      }}
      className="relative w-full h-full cursor-pointer"
    >
      <span className="absolute top-0 left-0 w-full h-full">{children}</span>
    </button>
  );
};

interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  onClick,
  color,
}) => {
  const { play } = useUiSounds(soundSelector.click);
  console.log(color);

  return (
    <button
      onClick={(event) => {
        onClick?.(event);
        play();
      }}
      className="relative w-full h-full cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <PixelBorder color={color} />
      <span className="absolute top-0 left-0 w-full h-full transition-all duration-200">
        {children}
      </span>
    </button>
  );
};
