import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const options = [
  "Remembering (Recall facts, ...)",
  "Understanding (Explain concepts, ...)",
  "Applying (Solve problems, ...)",
  "Analyzing (Break down arguments, ...)",
  "Evaluating (Critique solutions, ...)",
  "Creating (Formulate theories, ...)",
  "Others",
];

export default function Multiselector() {
  const [selected, setSelected] = useState([]);
  const [custom, setCustom] = useState("");

  const handleCheck = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleCustom = (e) => setCustom(e.target.value);

  const handleCustomEnter = (e) => {
    if (e.key === "Enter" && custom.trim()) {
      setSelected((prev) => [...prev, custom.trim()]);
      setCustom("");
    }
  };

  return (
    <div className="w-[300px] bg-white rounded-3xl shadow-lg p-[30px] flex flex-col gap-2 transition-all duration-300">
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 justify-between text-[15px] truncate">
            <span className="truncate font-semibold">{option}</span>
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={() => handleCheck(option)}
            />
          </label>
        ))}
        {/* Animated input field for "Others" */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            selected.includes("Others") ? "max-h-[60px] mt-2" : "max-h-0"
          }`}
        >
          {selected.includes("Others") && (
            <input
              type="text"
              value={custom}
              onChange={handleCustom}
              onKeyDown={handleCustomEnter}
              placeholder="Enter your answer"
              className="placeholder:font-semibold  h-[40px] w-full px-2 py-1 rounded-lg border border-gray-300 text-[15px] bg-transparent"
            />
          )}
        </div>
      </div>
    </div>
  );
}