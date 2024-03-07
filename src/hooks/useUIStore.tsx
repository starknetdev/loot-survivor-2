import { create } from "zustand";
import { Grid, EncounterPosition } from "@/types";

export type ScreenPage =
  | "start"
  | "selectGame"
  | "selectBag"
  | "adventurerInfo"
  | "game"
  | "leaderboard"
  | "selectAdventurer";

type State = {
  screen: ScreenPage;
  setScreen: (value: ScreenPage) => void;
  grid: Grid;
  setGrid: (value: Grid) => void;
  encounters: EncounterPosition[];
  setEncounters: (value: EncounterPosition[]) => void;
};

const useUIStore = create<State>((set) => ({
  screen: "start",
  setScreen: (value) => set({ screen: value }),
  grid: [Array(3).fill(null)],
  setGrid: (value) =>
    set({
      grid: value,
    }),
  encounters: [],
  setEncounters: (value) => set({ encounters: value }),
}));

export default useUIStore;
