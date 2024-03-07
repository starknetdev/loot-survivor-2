import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <span className="text-terminal-black font-bold bg-terminal-silver">
      <input placeholder="Enter an Adventurer name" {...props} />
    </span>
  );
};
