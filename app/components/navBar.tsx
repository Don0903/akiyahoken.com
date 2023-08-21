"use client";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
export default function NavBar() {
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Miscellaneous",
      href: "/miscellaneous",
    },
    {
      name: "Admins",
      href: "/admins",
    },
  ];


  const [active, setActive] = useState(navigation[0].name);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActive(storedActiveLink);
    }
  }, []); // Run only once on component mount

  useEffect(() => {
    localStorage.setItem("activeLink", active);
  }, [active]);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 shadow bg-white z-10">
      {/* logo */}
      <div>hello</div>
      {/* nav */}
      <ul className="justify-between items-center hidden md:flex">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={`${
              active === item.name ? "bg-black text-white" : "hover:opacity-50"
            } rounded-full px-4 py-2`}
            onClick={() => setActive(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {/* mobile nav */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          {/* hanburger */}
          <div className="md:hidden z-10">
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
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  active === item.name
                    ? "bg-black text-white"
                    : "hover:opacity-50"
                } rounded-full px-4 py-4  flex w-full hover:scale-105 duration-300`}
                onClick={() => {
                  setActive(item.name);
                }}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
