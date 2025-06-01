
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const checklist = [
    { label: "გასდო ავტორი", active: true },
    { label: "დანერგე სტატია", active: true },
    { label: "გამოიმუშავე ფული", active: true },
];

export default function OnboardingSuccessCard() {
    return (
        <div className="max-w-xl w-full bg-white rounded-[12px] px-6 py-8 relative overflow-hidden">
            {/* Decorative top-right border pattern */}
            <div className="absolute top-0 right-0 p-4">
                <div className="grid grid-cols-1 gap-[6px]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-[2px] h-6 bg-black" />
                    ))}
                </div>
            </div>

            {/* Title */}
            <h2 className="text-[20px] md:text-[22px] font-bold leading-snug text-[#3A3A3A] mb-3">
                გახდით რეპორტიორი Intermedia.ge-ს დამხმარებით!
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] leading-6 text-[#3A3A3A] mb-6">
                ყველასთვის მასშტაბური და პოპულარული ქართული პლატფორმა
                შესაძლებლობას გთავაზობთ ქურნალისტიკისთვის
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-4 mb-6">
                {checklist.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-[#3A3A3A] text-[16px]">
                        <CheckCircle2 className="w-5 h-5 text-[#3A3A3A]" />
                        {item.label}
                    </li>
                ))}
            </ul>

            {/* Action Button */}
            <Link href="/create-article" passHref>
                <button className="px-6 py-2 border border-black rounded-md text-[15px] text-black font-medium hover:bg-black hover:text-white transition">
                    დანერგე სტატია
                </button>
            </Link>

            {/* Decorative bottom lines */}
            <div className="absolute bottom-3 right-3 space-y-2">
                <div className="w-32 h-[3px] bg-black rounded" />
                <div className="w-24 h-[3px] bg-black rounded ml-auto" />
            </div>
        </div>
    );
}
