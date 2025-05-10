import React, { useState } from "react";

interface SelectArrowProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    options: string[];
}
const SelectArrow : React.FC<SelectArrowProps> = ({value, setValue, options}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative flex items-center w-full max-md:max-w-full">
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                required
                className= {`custom-select pr-10 w-full h-10 px-3 py-2 text-base rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] hover:cursor-pointer ${!value ? "text-white/40" : "text-white"}`}
            >
                <option value="" disabled selected hidden>
                Select option
                </option>
                {options?.map((option) => (
                <option key={option} value={option} className="bg-blue-200 text-gray-900 hover:cursor-pointer hover:bg-blue-700">
                    {option}
                </option>
                ))}
            </select>
            
            {/* Custom Arrow */}
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                <svg
                className={`w-5 h-5 transition-transform duration-200 text-white ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </div>
    );
}

export default SelectArrow;