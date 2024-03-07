import { useState } from "react";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";

export const AdventurerCarousel = () => {
  const [adventurerImageIndex, setAdventurerImageIndex] = useState(0);

  const handleIncrement = () => {
    if (adventurerImageIndex < adventurerImages.length - 1) {
      setAdventurerImageIndex(adventurerImageIndex + 1);
    } else {
      setAdventurerImageIndex(0); // Reset to the first image or handle as needed
    }
  };

  const handleDecrement = () => {
    if (adventurerImageIndex > 0) {
      setAdventurerImageIndex(adventurerImageIndex - 1);
    } else {
      setAdventurerImageIndex(adventurerImages.length - 1); // Go to the last image or handle as needed
    }
  };

  const adventurerImages = [
    { description: "Robe Adventurer", image: "left-robe-adventurer.png" },
    { description: "Wizard Adventurer", image: "right-wizard.png" },
  ];
  return (
    <div className="relative flex flex-col gap-2">
      <img
        src={
          new URL(
            `../../assets/adventurer/${adventurerImages[adventurerImageIndex].image}`,
            import.meta.url
          ).href
        }
        className="w-[500px] h-[500px] border border-terminal-silver border-8"
        alt="adventurer-image"
      />
      <div className="flex flex-row items-center justify-between">
        <button
          onClick={() => handleDecrement()}
          className="bg-terminal-silver text-terminal-black"
        >
          <img src={LeftArrow} alt="left-arrow" className="w-10 h-10" />
        </button>
        <p className="uppercase">
          {adventurerImages[adventurerImageIndex].description}
        </p>
        <button
          onClick={() => handleIncrement()}
          className="bg-terminal-silver text-terminal-black"
        >
          <img src={RightArrow} alt="right-arrow" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
