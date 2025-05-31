"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { href: "https://facebook.com", Icon: FaFacebookF },
    { href: "https://instagram.com", Icon: FaInstagram },
    { href: "https://x.com", Icon: FaXTwitter },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white py-10 px-4">
            <div className="max-w-[1300px] mx-auto flex flex-col items-center gap-6 text-center">
                {/*  Social Icons with <a> only */}
                <div className="flex items-center justify-center gap-6 sm:gap-8">
                    {socialLinks.map(({ href, Icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 border border-[#4E5B76] text-[#4E5B76] rounded-full flex items-center justify-center transition hover:bg-[#4E5B76] hover:text-white active:scale-95"
                        >
                            <Icon className="text-lg sm:text-xl" />
                        </a>
                    ))}
                </div>

                {/*  Internal page links using Next.js Link */}
                <div className="flex flex-col sm:flex-row items-center gap-2 text-[#4E5B76] text-sm">
                    <Link href="/terms" className="hover:underline cursor-pointer">
                        წესები და პირობები
                    </Link>
                    <span className="hidden sm:inline-block">|</span>
                    <Link href="/privacy" className="hover:underline cursor-pointer">
                        კონფიდენციალურობის პოლიტიკა
                    </Link>
                </div>

                <p className="text-[#4E5B76] text-sm">
                    © 2024 intermedia.ge. ყველა უფლება დაცულია.
                </p>
            </div>
        </footer>
    );
}