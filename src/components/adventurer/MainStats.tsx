import {
  CharismaIcon,
  DexterityIcon,
  IntelligenceIcon,
  StrengthIcon,
  VitalityIcon,
  WisdomIcon,
} from "@/components/icons";

export const Stats = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <span className="w-5 h-5 text-terminal-silver">
          <CharismaIcon />
        </span>
        <p>CHA: 0</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="w-5 h-5 text-terminal-silver">
          <DexterityIcon />
        </span>
        <p>DEX: 0</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="w-5 h-5 text-terminal-silver">
          <IntelligenceIcon />
        </span>
        <p>INT: 0</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="w-5 h-5 text-terminal-silver">
          <StrengthIcon />
        </span>
        <p>STR: 0</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="w-5 h-5 text-terminal-silver">
          <VitalityIcon />
        </span>
        <p>VIT: 0</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="w-5 h-5 text-terminal-silver">
          <WisdomIcon />
        </span>
        <p>WIS: 0</p>
      </div>
    </div>
  );
};
