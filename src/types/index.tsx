export type Attack = number | null;
export type Grid = Encounter[][];

export interface Position {
  nextRow: number;
  nextCol: number;
}

export interface Encounter {
  value: number;
  animate: boolean;
}

export interface EncounterPosition extends Encounter {
  nextRow: number;
  nextCol: number;
}

export interface Stats {
  strength: number;
  dexterity: number;
  vitality: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  luck: number;
}

export interface Item {
  id: number;
  xp: number;
  metadata: number;
}

export interface Adventurer {
  [key: string]: number | Stats | Item | boolean;
  id: number;
  lastActionBlock: number;
  health: number;
  xp: number;
  stats: Stats;
  gold: number;
  weapon: Item;
  chest: Item;
  head: Item;
  waist: Item;
  foot: Item;
  hand: Item;
  neck: Item;
  ring: Item;
  beastHealth: number;
  statPointsAvailable: number;
  actionsPerBlock: number;
  mutated: boolean;
}

export interface AdventurerMetadata {
  name: number;
  owner: string;
}

export interface AdventurerBag {
  item1?: Item;
  item2?: Item;
  item3?: Item;
  item4?: Item;
  item5?: Item;
  item6?: Item;
  item7?: Item;
  item8?: Item;
  item9?: Item;
  item10?: Item;
  item11?: Item;
}
