import StatDisplay from "../icons/StatIcon";

type Stat =
  | "charisma"
  | "dexterity"
  | "intelligence"
  | "strength"
  | "vitality"
  | "wisdom"
  | "luck";

interface StatsCardProps {
  stat: Stat;
}

const StatsCard = ({ stat }: StatsCardProps) => {
  return (
    <div className="flex flex-col gap-2 h-full items-center justify-center w-1/3">
      <span className="flex items-center justify-center h-20 w-20 bg-terminal-silver text-terminal-black rounded-md p-2">
        <span className="flex items-center justify-center h-12 w-12">
          <StatDisplay type={stat} />
        </span>
      </span>
      <div className="flex flex-row gap-2 h-1/2">
        <span
          className="flex items-center justify-center h-6 w-8 bg-terminal-silver rounded-md text-terminal-black cursor-pointer text-2xl font-bold"
          onClick={() => null}
        >
          -
        </span>
        <span
          className="flex items-center justify-center h-6 w-8 bg-terminal-silver rounded-md text-terminal-black cursor-pointer text-2xl font-bold"
          onClick={() => null}
        >
          +
        </span>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-5 h-full">
      <div className="flex flex-col items-center h-1/4">
        <h1 className="text-8xl">2</h1>
        <p className="uppercase">Points Available</p>
      </div>
      <div className="flex flex-col h-3/4 w-full p-5">
        <div className="flex flex-row h-1/2">
          <StatsCard stat="charisma" />
          <StatsCard stat="dexterity" />
          <StatsCard stat="intelligence" />
        </div>
        <div className="flex flex-row h-1/2">
          <StatsCard stat="strength" />
          <StatsCard stat="vitality" />
          <StatsCard stat="wisdom" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
