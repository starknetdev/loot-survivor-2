import useSound from "use-sound";

const dir = "/sounds/";

export const soundSelector = {
  click: "beep.wav",
};

export const useUiSounds = (selector: string) => {
  const [play] = useSound(dir + selector, {
    volume: 0.2,
  });

  return {
    play,
  };
};
