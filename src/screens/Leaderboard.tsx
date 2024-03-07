import { useState } from "react";
import { PixelButton } from "@/components/Button";
import BYOB from "@/assets/icons/byob.png";
import BYOGA from "@/assets/icons/byoga.png";
import LeaderboardTable from "@/components/leaderboard/Table";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(0);
  console.log(leaderboard);
  return (
    <div className="flex flex-col items-center gap-5 relative min-h-screen">
      <h1 className="text-center text-6xl uppercase">Leaderboard</h1>
      <div className="flex flex-row h-40 items-center justify-center gap-10">
        <span className="h-full w-40">
          <PixelButton color="grey" onClick={() => setLeaderboard(0)}>
            <span className="h-full w-full items-center justify-center flex flex-col p-5">
              <img
                src={BYOB}
                alt="BYOB"
                className="w-full h-full object-contains"
              />
            </span>
          </PixelButton>
        </span>
        <span className="h-full w-40">
          <PixelButton color="grey" onClick={() => setLeaderboard(1)}>
            <span className="h-full w-full items-center justify-center flex flex-col p-5">
              <img
                src={BYOGA}
                alt="BYOB"
                className="w-full h-full object-contains"
              />
            </span>
          </PixelButton>
        </span>
      </div>
      <div className="flex items-center justify-center w-full">
        <LeaderboardTable />
      </div>
    </div>
  );
}

export default Leaderboard;
