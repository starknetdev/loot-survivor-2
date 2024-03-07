import { num } from "starknet";
import { Buffer } from "buffer";

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export function displayAddress(string: string) {
  if (string === undefined) return "unknown";
  return string.substring(0, 6) + "..." + string.substring(string.length - 4);
}

export function calculateLevel(xp: number) {
  return Math.max(Math.floor(Math.sqrt(xp)), 1);
}

export function feltToString(felt: number) {
  const newStrB = Buffer.from(felt.toString(16), "hex");
  return newStrB.toString();
}

export function hexAddress(felt: number) {
  return num.toHex(felt);
}
