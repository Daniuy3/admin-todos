"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
    options?: number[];
    currentTab?: number;
}

export const TabBar = ({options = [1, 2, 3, 4, 5], currentTab=1}:Props) => {

    const [selected, setselected] = useState(currentTab)

    const onTabSelected = (tab: number) => {
        setselected(tab)
        setCookie("currentTab", tab.toString())
    }
    
    return (
    <div className={`w-full space-x-2 rounded-xl bg-gray-200 p-2 grid`} style={{gridTemplateColumns: `repeat(${options.length}, 1fr)`}}>
            {options.map((option) => (
                <div key={option} >

                    <input type="radio" id={String(option)} className="peer hidden" 
                        checked={selected === option}
                        onChange={() => {}}
                    />

                    <label className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-colors duration-300"
                        htmlFor={String(option)}
                        onClick={() => onTabSelected(option)}
                    >
                        {option}
                    </label>

                </div>
            ))}
    </div>
  );
};
