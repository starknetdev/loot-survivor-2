import Stats from "@/components/upgrade/Stats";
import Loot from "@/components/upgrade/Loot";
import { PixelContainer } from "../PixelContainer";

interface UpgradeContainerProps {
  upgradeSection: number;
}

const UpgradeContainer = ({ upgradeSection }: UpgradeContainerProps) => {
  return (
    <div className="h-full flex items-end">
      <div className="h-[90%] w-[95%]">
        <PixelContainer color="grey">
          {upgradeSection === 0 && <Stats />}
          {upgradeSection === 1 && <Loot />}
        </PixelContainer>
      </div>
    </div>
  );
};

export default UpgradeContainer;
