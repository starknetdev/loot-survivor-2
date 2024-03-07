import {
  Adventurer,
  Stats,
  Item,
  AdventurerMetadata,
  AdventurerBag,
} from "@/types";
import { calculateLevel, feltToString } from "@/utils";

export class AdventurerClass {
  [key: string]:
    | number
    | string
    | Date
    | Stats
    | Item
    | boolean
    | AdventurerBag;
  id: number; // Adventurer ID
  lastActionBlock: number; // Block number from last action
  owner: string; // Hex address of the owner
  name: string; // Name of the adventurer
  health: number; // Health of the adventurer
  level: number; // Level of the adventurer
  stats: Stats;
  xp: number; // Experience of the adventurer
  weapon: Item; // Weapon of the adventurer
  chest: Item; // Chest armor of the adventurer
  head: Item; // Head armor of the adventurer
  waist: Item; // Waist armor of the adventurer
  foot: Item; // Feet armor of the adventurer
  hand: Item; // Hands armor of the adventurer
  neck: Item; // Necklace of the adventure
  ring: Item; // Ring of the adventure
  beastHealth: number; // Beast health adventurer is engaging
  statPointsAvailable: number; // Stat upgrades adventurer has
  gold: number; // Gold adventurer has
  bag: AdventurerBag; // Bag of the adventurer
  constructor(
    adventurer: Adventurer,
    adventurerMeta: AdventurerMetadata,
    adventurerBag: AdventurerBag
  ) {
    this.id = adventurer.id;
    this.lastActionBlock = adventurer.lastActionBlock;
    this.owner = adventurerMeta.owner;
    this.name = feltToString(adventurerMeta.name);
    this.health = adventurer.health;
    this.level = calculateLevel(adventurer.xp ?? 0);
    this.stats = adventurer.stats;
    this.xp = adventurer.xp;
    this.weapon = adventurer.weapon;
    this.chest = adventurer.chest;
    this.head = adventurer.head;
    this.waist = adventurer.waist;
    this.foot = adventurer.foot;
    this.hand = adventurer.hand;
    this.neck = adventurer.neck;
    this.ring = adventurer.ring;
    this.beastHealth = adventurer.beastHealth;
    this.statPointsAvailable = adventurer.statPointsAvailable;
    this.gold = adventurer.gold;
    this.bag = adventurerBag;
  }
}
