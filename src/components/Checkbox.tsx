import { useState } from "react";
import { TickIcon } from "./icons";

const Checkbox = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="h-full w-full border border-terminal-silver cursor-pointer"
      onClick={() => setSelected(!selected)}
    >
      <span className={selected ? "" : "hidden"}>
        <TickIcon />
      </span>
    </div>
  );
};

export default Checkbox;
