import { LootStatsRow } from "@/components/LootStatsRow";

export const LootStats = () => {
  const weaponProgress = 60;
  const clothArmorProgress = 0;
  const hideArmorProgress = 40;
  const metalArmorProgress = 20;
  const jewelryProgress = 20;

  return (
    <div className="flex flex-col">
      <LootStatsRow title={"Weapon"} progress={weaponProgress} />
      <LootStatsRow title={"Cloth Armor"} progress={clothArmorProgress} />
      <LootStatsRow title={"Hide Armor"} progress={hideArmorProgress} />
      <LootStatsRow title={"Metal Armor"} progress={metalArmorProgress} />
      <LootStatsRow title={"Jewelry"} progress={jewelryProgress} />
    </div>
  );
};
