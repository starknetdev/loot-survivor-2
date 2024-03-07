import { useRef, useState, useEffect } from "react";
import { PixelContainer } from "../PixelContainer";
import useUIStore from "@/hooks/useUIStore";
import { GameData } from "@/utils/data";

const ExploreHistory = () => {
  const { grid, encounters } = useUIStore();
  const gameData = new GameData();

  // Function to render SVG lines between encounters
  const renderLines = () => {
    let lines = [];
    const itemWidth = 80; // Width of the item
    const xgap = 80; // Gap between items
    const ygap = 40; // Gap between items
    const xOffset = 67.5; // Half of itemWidth to get the center
    const yOffset = 40; // Adjust based on your item's height to find the vertical center

    for (let i = 1; i < encounters.length; i++) {
      const start = encounters[i - 1];
      const end = encounters[i];

      // Calculate the line length (use your actual logic for line length calculation)
      const lineLength =
        Math.sqrt(
          Math.pow(end.nextCol - start.nextCol, 2) +
            Math.pow(end.nextRow - start.nextRow, 2)
        ) *
        (itemWidth + xgap); // Example calculation, adjust as needed

      // Inline style for stroke-dasharray and stroke-dashoffset
      const lineStyle = {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
        animation: `dash ${lineLength / 100}s linear forwards`, // Adjust animation speed
      };

      lines.push(
        <line
          key={`line-${i}`}
          x1={start.nextCol * (itemWidth + xgap) + xOffset}
          y1={start.nextRow * (itemWidth + ygap) + yOffset}
          x2={end.nextCol * (itemWidth + xgap) + xOffset}
          y2={end.nextRow * (itemWidth + ygap) + yOffset}
          stroke="white"
          strokeWidth="2"
          style={lineStyle}
        />
      );
    }
    return lines;
  };

  console.log(encounters);
  console.log(`../../../assets/icons/${gameData.ENCOUNTERS[1]}`);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="h-3/4 w-full p-5">
        <PixelContainer>
          <div className="flex flex-col gap-5 w-full h-full p-10 overflow-scroll">
            <div className="relative">
              <svg className="absolute top-0 left-0 h-full w-full z-0">
                {renderLines()}
              </svg>
              <div className="relative flex flex-col gap-10 z-10 items-center justify-center">
                {grid.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="relative grid grid-cols-3 sm:gap-10 2xl:gap-20 z-10" // Adjust the number of cols and gap as needed
                  >
                    {row.map((encounter, colIndex) => (
                      <div
                        key={colIndex}
                        className={`w-20 h-20 flex justify-center items-center animate-encounterFadeIn bg-terminal-black ${
                          encounter
                            ? "border border-white"
                            : "border-transparent"
                        }`} // Adjust for encounter presence
                      >
                        {encounter !== null ? (
                          <img
                            src={
                              new URL(
                                `../../assets/icons/${
                                  gameData.ENCOUNTERS[encounter.value]
                                }`,
                                import.meta.url
                              ).href
                            }
                            alt="Encounter"
                            className="w-full h-full object-cover" // Adjust as needed to fit the image properly
                          />
                        ) : (
                          <div className="w-full h-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PixelContainer>
      </div>
    </div>
  );
};

export default ExploreHistory;
