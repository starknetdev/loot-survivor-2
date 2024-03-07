import { Button } from "@/components/Button";
import useUIStore from "@/hooks/useUIStore";
import { Bag } from "@/components/Bag";

function SelectBag() {
  const { setScreen } = useUIStore();

  return (
    <div className="min-h-screen flex flex-col gap-20 h-full p-20">
      <h1 className="flex justify-center text-8xl font-bold text-terminal-silver uppercase">
        Choose Bag
      </h1>
      <div className="w-2/3 h-[500px] flex flex-col gap-10 mx-auto">
        <div className="h-1/2">
          <Bag />
        </div>
      </div>
    </div>
  );
}

export default SelectBag;
