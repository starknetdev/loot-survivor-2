import LeaderboardRow from "./Row";
import { adventurerTest } from "@/types/test";
import { Button } from "../Button";
import { LeftArrowIcon } from "../icons";

const LeaderboardTable = () => {
  const adventurersList = [
    adventurerTest,
    adventurerTest,
    adventurerTest,
    adventurerTest,
    adventurerTest,
  ];
  return (
    <div className="flex flex-col w-full h-full">
      {adventurersList.length > 0 &&
        adventurersList.map((adventurer, index) => (
          <div className="h-24" key={index}>
            <LeaderboardRow
              adventurer={adventurer}
              handleRowSelected={() => null}
            />
          </div>
        ))}
      <div className="flex flex-row">
        <Button>
          <span className="w-5 h-5 text-terminal-black bg-terminal-silver">
            <LeftArrowIcon />
          </span>
        </Button>

        <Button>
          <span className="bg-terminal-silver text-terminal-black w-10 h-10">
            {1}
          </span>
        </Button>

        <Button>{10}</Button>

        <Button>next</Button>
      </div>
    </div>
  );
};

export default LeaderboardTable;
