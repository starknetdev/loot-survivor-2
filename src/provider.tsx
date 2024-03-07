"use client";
import React from "react";
import {
  Connector,
  StarknetConfig,
  alchemyProvider,
  blastProvider,
} from "@starknet-react/core";
import { goerli, mainnet } from "@starknet-react/chains";

export function StarknetProvider({
  connectors,
  children,
}: {
  connectors: Connector[];
  children: React.ReactNode;
}) {
  const apiKey = import.meta.env.VITE_RPC_API_KEY;
  const onMainnet = import.meta.env.VITE_NETWORK === "mainnet";
  const provider = onMainnet
    ? alchemyProvider({ apiKey })
    : blastProvider({ apiKey });
  const chains = onMainnet ? [mainnet] : [goerli];
  return (
    <StarknetConfig
      connectors={connectors}
      autoConnect
      provider={provider}
      chains={chains}
    >
      {children}
    </StarknetConfig>
  );
}
