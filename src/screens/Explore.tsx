import useUIStore from "@/hooks/useUIStore";
import { Button } from "@/components/Button";

interface WeaponBoxProps {
  image: string;
}

const WeaponBox = ({ image }: WeaponBoxProps) => {
  return (
    <span className="border w-40 cursor-pointer">
      <img src={new URL(`../assets/items-nb/${image}`, import.meta.url).href} />
    </span>
  );
};

function Explore() {
  const { setScreen } = useUIStore();

  return <div className="min-h-screen flex flex-col"></div>;
}

export default Explore;
