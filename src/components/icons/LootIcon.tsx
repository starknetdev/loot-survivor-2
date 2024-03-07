import { ReactElement } from "react";
import {
  ChestIcon,
  WeaponIcon,
  HeadIcon,
  HandIcon,
  WaistIcon,
  FootIcon,
  NeckIcon,
  RingIcon,
} from ".";

export interface ItemDisplayProps {
  type: string;
}

const ItemDisplay = ({ type }: ItemDisplayProps) => {
  const Components: { [key in string]: ReactElement } = {
    chest: <ChestIcon />,
    weapon: <WeaponIcon />,
    head: <HeadIcon />,
    hand: <HandIcon />,
    waist: <WaistIcon />,
    foot: <FootIcon />,
    neck: <NeckIcon />,
    ring: <RingIcon />,
  };

  return Components[type?.toLowerCase()];
};

export default ItemDisplay;
