import React, { useRef, useEffect } from "react";
import { drawNineSliceImage } from "@/utils/nineSliceImage";

interface PixelBorderProps {
  color?: string;
}

export const PixelBorder = ({ color }: PixelBorderProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      console.log("CanvasRenderingContext2D not found");
      return;
    }

    // Set the background color within the canvas
    if (color === "grey") {
      ctx.fillStyle = "rgba(115, 116, 117, 1)";
    } else {
      ctx.fillStyle = "rgba(23, 22, 23, 1)";
    }
    ctx.fillRect(7, 7, canvas.width - 15, canvas.height - 15);

    const img = new Image();
    img.src = "/pixel-border.png"; // Adjust the path to your image file

    img.onload = () => {
      drawNineSliceImage({
        ctx,
        img,
        leftWidth: 25,
        rightWidth: 25,
        topHeight: 25,
        bottomHeight: 25,
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full transition-all duration-200"
    />
  );
};
