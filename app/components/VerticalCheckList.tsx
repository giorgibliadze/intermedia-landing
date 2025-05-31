"use client";

import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

interface ListItem {
    label: string;
    active: boolean;
}

const items: ListItem[] = [
    { label: "გასდო ავტორი", active: false },
    { label: "დანერგე სტატია", active: false },
    { label: "გამოიმუშავე ფული", active: false },
    { label: "გასდო ავტორი", active: false },
    { label: "დანერგე სტატია", active: true },
    { label: "გამოიმუშავე ფული", active: true },
    { label: "გასდო ავტორი", active: false },
    { label: "დანერგე სტატია", active: false },
    { label: "გამოიმუშავე ფული", active: true },
    { label: "გასდო ავტორი", active: false },
    { label: "დანერგე სტატია", active: false },
    { label: "გამოიმუშავე ფული", active: false },
];

export default function VerticalCheckList() {
    return (
        <div className="bg-white p-4 rounded-xl border border-dashed border-purple-500 max-w-[300px] w-full">
            <ul className="flex flex-col gap-3">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={clsx(
                            "flex items-center gap-2 text-[16px] font-medium",
                            item.active ? "text-white" : "text-[#555555]"
                        )}
                    >
                        <CheckCircle2 className={clsx("w-5 h-5", item.active ? "text-white" : "text-[#555555]")} />
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
