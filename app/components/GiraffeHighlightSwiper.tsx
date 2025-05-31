"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
const slides = ["/giraffe.png", "/preview.png", "/Pic.png"];

export default function GiraffeHighlightSwiper() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full bg-white px-4 pt-8 mb-[30px]">
            {isMobile ? (
                <div className="relative max-w-[400px] mx-auto">
                    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                        <Image
                            src={slides[current]}
                            alt={`slide-${current}`}
                            width={800} // or adjust as needed
                            height={400} // or adjust as needed
                            className="object-cover w-full h-full"
                            priority
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                            <h3 className="text-white text-xl font-semibold mb-2">
                                ვინ იყო ვახტანგ გორგასლის დედა?
                            </h3>
                            <div className="flex flex-col text-sm text-gray-300">
                                <span className="flex items-center gap-2">👁 18,000 ნახვა</span>
                                <span>🕒 3 წუთის საკითხავი</span>
                            </div>
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        name="prev"
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        name="next"
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md w-10 h-10 flex items-center justify-center z-10"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            ) : (
                <div className="max-w-[1300px] min-h-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="relative w-full h-[500px] rounded-md overflow-hidden">
                        <Image
                            src="/giraffe.png"
                            alt="highlight"
                            width={1300}  // Or whatever your container width is
                            height={500}
                            className="object-cover w-full h-[500px]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                            <h3 className="text-white text-lg font-semibold mb-2">
                                ვინ იყო ვახტანგ გორგასლის დედა?
                            </h3>
                            <div className="flex flex-col text-sm text-gray-300">
                                <span className="flex items-center gap-2">
                                    <span className="text-sm">👁 18,000 ნახვა</span>
                                </span>
                                <span className="text-sm">🕒 3 წუთის საკითხავი</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {["/preview.png", "/Pic.png"].map((src, i) => (
                            <div key={i} className="relative w-full h-[55%] rounded-md overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt="preview"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                                    <h3 className="text-white text-base font-medium mb-1">
                                        ვინ იყო ვახტანგ გორგასლის დედა?
                                    </h3>
                                    <div className="flex flex-col text-sm text-gray-300">
                                        <span className="flex items-center gap-2">
                                            <span>👁 18,000 ნახვა</span>
                                        </span>
                                        <span>🕒 3 წუთის საკითხავი</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
