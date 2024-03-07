interface LootStatsRowProps {
  title: string;
  progress: number;
}

export const LootStatsRow = ({ title, progress }: LootStatsRowProps) => {
  return (
    <span className="flex flex-col text-left">
      <p>{title}</p>
      <span className="w-full">
        <div className="w-full h-2 sm:mt-1 border border-terminal-green bg-terminal-black ">
          <div
            className="h-full bg-terminal-green"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </span>
    </span>
  );
};
