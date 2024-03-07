// DamageNumber.tsx

import React, { useEffect, useState } from "react";

type Direction = "left" | "right";

interface DamageNumberProps {
  amount: number;
  onRemove: () => void;
  direction?: Direction;
}

const DamageNumber: React.FC<DamageNumberProps> = ({
  amount,
  onRemove,
  direction,
}) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisplayed(false); // Ensures component is ready to be removed
      onRemove(); // Call onRemove after the total animation duration
    }, 1500); // Total duration = 1s moveUp + 0.5s fadeOut

    return () => clearTimeout(timer);
  }, [onRemove]);

  return (
    <div
      className={`absolute top-0 ${
        direction === "right" ? "right-0" : "left-0"
      } text-4xl text-red-500 font-bold ${
        isDisplayed ? "animate-moveUpFadeOut" : ""
      }`} // Example fixed position
    >
      {amount}
    </div>
  );
};

export default DamageNumber;
