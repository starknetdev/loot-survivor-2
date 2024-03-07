import Title from "@/components/Title";
import useUIStore from "./hooks/useUIStore";
import SelectGame from "./screens/SelectGame";
import SelectBag from "./screens/SelectBag";
import AdventurerInfo from "./screens/AdventurerInfo";
import Game from "./screens/Game";
import { Header } from "@/components/navigation/Header";
import Leaderboard from "./screens/Leaderboard";
import Adventurers from "./screens/Adventurers";

function App() {
  const { screen } = useUIStore();

  return (
    <>
      {screen === "start" && <Title />}
      {screen === "selectGame" && <SelectGame />}
      {screen === "selectAdventurer" && <Adventurers />}
      {screen === "selectBag" && <SelectBag />}
      {screen === "adventurerInfo" && <AdventurerInfo />}
      {(screen === "game" || screen === "leaderboard") && (
        <div className="relative flex flex-col min-h-screen">
          <div className="top-0 w-full h-16">
            <Header />
          </div>
          {screen === "game" && <Game />}
          {screen === "leaderboard" && <Leaderboard />}
        </div>
      )}
    </>
  );
}

export default App;
