import { PixelButton } from "./Button";
import useUIStore from "@/hooks/useUIStore";
import { useDojo } from "@/DojoContext";
import { LogoIcon } from "./icons";

function Title() {
  const { setScreen } = useUIStore();
  const {
    account: { create, isDeploying },
  } = useDojo();
  return (
    <div className="min-h-screen flex flex-col justify-between h-full p-48">
      <span className="text-terminal-silver">
        <LogoIcon />
      </span>
      <div className="w-1/3 h-1/2 flex flex-col gap-10 mx-auto">
        <span className="h-32">
          <PixelButton
            onClick={() => {
              create();
              setScreen("selectGame");
            }}
          >
            <span className="h-full w-full flex items-center justify-center text-2xl font-bold uppercase">
              {isDeploying ? "Creating Burner" : "New Game"}
            </span>
          </PixelButton>
        </span>
        <span className="h-32">
          <PixelButton
            onClick={() => {
              setScreen("selectAdventurer");
            }}
          >
            <span className="h-full w-full flex items-center justify-center text-2xl font-bold uppercase">
              Load Game
            </span>
          </PixelButton>
        </span>
      </div>
    </div>
  );
}

export default Title;
