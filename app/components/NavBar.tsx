'use client';
import React from 'react';

const navLinks = [
    'სამაგიდო',
    'პოლიტიკა',
    'ეკონომიკა',
    'სპორტი',
    'მზესუმზირა',
    'მოდა',
    'კულტურა',
    'გართობა',
    'ბლოგი',
    'ტექ',
    'ვიდეო',
];

type Props = {
  isMobile?: boolean;
};

export default function NavBar({ isMobile = false }: Props) {
    return (
        <>
             <nav
      className={`${
        isMobile
          ? 'flex md:hidden overflow-x-auto no-scrollbar text-sm gap-4'
          : 'hidden md:flex flex-wrap justify-between max-w-[1212px] text-[16px] leading-[18px]'
      } text-[#636363] font-medium`}
    >
      {navLinks.map((item, i) => (
        <a key={i} href="#" className="hover:text-black whitespace-nowrap mr-20px">
          {item}
        </a>
      ))}
    </nav>
        </>
    );
}