import React, { ReactElement } from "react";
import {
  BladeIcon,
  BludgeonIcon,
  MagicIcon,
  ClothIcon,
  HideIcon,
  MetalIcon,
  RingIcon,
  NeckIcon,
} from "@/components/icons";

export interface EfficacyDisplayProps {
  type: string;
}

const EfficacyDisplay = ({ type }: EfficacyDisplayProps) => {
  const efficacy = type?.split(" ")[0].toLowerCase();

  const Components: { [key in string]: ReactElement } = {
    blade: <BladeIcon />,
    bludgeon: <BludgeonIcon />,
    magic: <MagicIcon />,
    cloth: <ClothIcon />,
    hide: <HideIcon />,
    metal: <MetalIcon />,
    ring: <RingIcon />,
    necklace: <NeckIcon />,
  };

  return Components[efficacy?.toLowerCase()];
};

export default EfficacyDisplay;
