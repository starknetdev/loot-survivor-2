import { create } from "zustand";

export type GameSection = "explore" | "battle" | "upgrade";

type State = {
  gameSection: GameSection;
  setGameSection: (value: GameSection) => void;
};

const useGameState = create<State>((set) => ({
  gameSection: "explore",
  setGameSection: (value) => set({ gameSection: value }),
}));

export default useGameState;
