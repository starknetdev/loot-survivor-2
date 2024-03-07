import { create } from "zustand";

export type AnimationNames = "adventurerAttack" | "beastAttack" | "burning";

interface AnimationState {
  animations: { [key in AnimationNames]?: boolean };
  toggleAnimation: (name: AnimationNames) => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  animations: {},
  toggleAnimation: (name: AnimationNames) =>
    set((state) => ({
      animations: {
        ...state.animations,
        [name]: !state.animations[name],
      },
    })),
}));
