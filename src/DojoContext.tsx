import { createContext, ReactNode, useContext, useMemo } from "react";
import { Account, RpcProvider } from "starknet";
import { BurnerManager, useBurnerManager } from "@dojoengine/create-burner";

type Context = {
  account: {
    create: () => void;
    list: () => any[];
    get: (id: string) => Account;
    select: (id: string) => void;
    account: Account;
    masterAccount: Account;
    isDeploying: boolean;
    clear: () => void;
  };
};

const DojoContext = createContext<Context | null>(null);

type Props = {
  children: ReactNode;
};

export const DojoProvider = ({ children }: Props) => {
  const {
    VITE_PUBLIC_MASTER_ADDRESS,
    VITE_PUBLIC_MASTER_PRIVATE_KEY,
    VITE_PUBLIC_ACCOUNT_CLASS_HASH,
    VITE_PUBLIC_NODE_URL,
  } = import.meta.env;

  const currentValue = useContext(DojoContext);

  if (currentValue) throw new Error("DojoProvider can only be used once");

  const provider = useMemo(
    () =>
      new RpcProvider({
        nodeUrl: VITE_PUBLIC_NODE_URL!,
      }),
    [VITE_PUBLIC_NODE_URL]
  );

  const masterAddress = VITE_PUBLIC_MASTER_ADDRESS!;
  const privateKey = VITE_PUBLIC_MASTER_PRIVATE_KEY!;

  const masterAccount = useMemo(
    () => new Account(provider, masterAddress, privateKey),
    [provider, masterAddress, privateKey]
  );

  const { create, list, get, account, select, isDeploying, clear } =
    useBurnerManager({
      burnerManager: new BurnerManager({
        masterAccount,
        accountClassHash: VITE_PUBLIC_ACCOUNT_CLASS_HASH!,
        rpcProvider: provider,
      }),
    });

  const selectedAccount = useMemo(() => {
    return account || masterAccount;
  }, [account, masterAccount]);

  const contextValue: Context = {
    account: {
      create,
      list,
      get,
      select,
      account: selectedAccount,
      masterAccount,
      isDeploying,
      clear,
    },
  };

  return (
    <DojoContext.Provider value={contextValue}>{children}</DojoContext.Provider>
  );
};

export const useDojo = () => {
  const value = useContext(DojoContext);
  if (!value) throw new Error("Must be used within a DojoProvider");
  return value;
};
