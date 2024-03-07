import React, { ReactElement } from "react";
import {
  CharismaIcon,
  DexterityIcon,
  IntelligenceIcon,
  StrengthIcon,
  VitalityIcon,
  WisdomIcon,
  LuckIcon,
} from "@/components/icons";

export interface EfficacyDisplayProps {
  type: string;
}

const StatDisplay = ({ type }: EfficacyDisplayProps) => {
  const stat = type?.split(" ")[0].toLowerCase();

  const Components: { [key in string]: ReactElement } = {
    charisma: <CharismaIcon />,
    dexterity: <DexterityIcon />,
    intelligence: <IntelligenceIcon />,
    strength: <StrengthIcon />,
    vitality: <VitalityIcon />,
    wisdom: <WisdomIcon />,
    luck: <LuckIcon />,
  };

  return Components[stat?.toLowerCase()];
};

export default StatDisplay;
