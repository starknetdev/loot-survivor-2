import React, { ReactNode } from "react";
import { PixelBorder } from "./PixelBorder";

interface PixelContainerProps {
  children: ReactNode;
  color?: string;
}

export const PixelContainer: React.FC<PixelContainerProps> = ({
  children,
  color,
}) => {
  return (
    <div className="relative w-full h-full">
      <PixelBorder color={color} />
      <span className="absolute top-0 left-0 w-full h-full">{children}</span>
    </div>
  );
};
