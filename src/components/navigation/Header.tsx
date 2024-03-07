import { useState } from "react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import {
  ArcadeIcon,
  CartIcon,
  GithubIcon,
  DocsIcon,
  VolumeOffIcon,
  VolumeOnIcon,
  LogoIcon,
  PowerIcon,
} from "../icons";
import { displayAddress } from "@/utils";
import useUIStore from "@/hooks/useUIStore";
import { Button } from "../Button";

export const Header = () => {
  const [isMuted, setIsMuted] = useState(false);
  const { account } = useAccount();
  const { disconnect } = useDisconnect();
  const { setScreen } = useUIStore();
  console.log(account);
  return (
    <div className="flex flex-row items-center justify-between bg-terminal-silver text-terminal-black px-5 h-full">
      <span className="flex items-center w-96 h-full">
        <LogoIcon />
      </span>
      <div className="flex flex-row gap-10 items-center">
        <span
          onClick={() => setScreen("leaderboard")}
          className="uppercase cursor-pointer font-bold"
        >
          Leaderboard
        </span>
        {account && (
          <span className="w-5 h-5">
            <CartIcon />
          </span>
        )}
        {/* {displayCart && (
          <TransactionCart
            buttonRef={displayCartButtonRef}
            multicall={multicall}
            gameContract={gameContract}
          />
        )} */}
        <div className="relative flex items-center">
          <button
            onClick={() => {
              disconnect();
            }}
            className="text-terminal-black uppercase cursor-pointer font-bold"
          >
            {account ? displayAddress(account.address) : "Connect"}
          </button>
        </div>
        <span
          className="w-8 h-8 cursor-pointer"
          onClick={() => setScreen("start")}
        >
          <PowerIcon />
        </span>
        <span
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </span>
        <span className="w-8 h-8 cursor-pointer">
          <DocsIcon />
        </span>
        <span className="w-8 h-8 cursor-pointer">
          <GithubIcon />
        </span>
      </div>
    </div>
  );
};
