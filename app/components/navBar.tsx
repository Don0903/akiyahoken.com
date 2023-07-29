"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigation = [
    {
      name: "Home",
      href: "/",
      current: true,
    },
    {
      name: "About",
      href: "/about",
      current: false,
    },
    {
      name: "Projects",
      href: "#",
      current: false,
    },
    {
      name: "Projects",
      href: "#",
      current: false,
    },
    {
      name: "Contact",
      href: "/contact",
      current: false,
    },
  ];
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 shadow bg-white z-10">
      {/* logo */}
      <div>hello</div>
      {/* nav */}
      <ul className="justify-between items-center hidden md:flex">
        {navigation.map((item) => (
          <li key={item.name} className="mx-4">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* mobile nav */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          {/* hanburger */}
          <div onClick={handleClick} className="md:hidden z-10">
              <FaBars className="text-3xl" />
          </div>
        </SheetTrigger>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle className="mx-auto">Menu</SheetTitle>
            <hr />

          </SheetHeader>
          <ul className="flex flex-col justify-center items-center">
            {navigation.map((item) => (
              <li key={item.name} className="flex w-full m-4 hover:scale-105 duration-300">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
