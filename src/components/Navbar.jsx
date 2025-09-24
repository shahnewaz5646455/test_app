"use client";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import React, { useState } from "react";
import { useGlobalState } from "@/context/AppContext";

const languages = [
  { code: "EN", label: "English" },
  { code: "AR", label: "Arabic" },
  { code: "DE", label: "German" },
];

export default function Navbar() {
  const { selectedLang, setSelectedLang } = useGlobalState();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex ${
        selectedLang === "AR" && "flex-row-reverse"
      } items-center justify-between h-[94px] px-8 bg-white border-b border-[#E5E7EB]`}
    >
      {/* Logo */}
      <div>
        <img
          src="https://staging.amal.education/images/common/amalLogo.png"
          alt="Logo"
          className="h-10"
        />
      </div>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-between w-[110px] h-[40px] px-4 py-2 bg-white border font-semibold border-[#D1D5DB] rounded-[0.5rem] text-[15px] text-[#222]  hover:bg-[#F9FAFB] transition-all"
        >
          {selectedLang}
          <span
            className={`ml-2 transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          sideOffset={6}
          className="w-[110px] min-w-[110px] bg-white p-1 rounded-lg  [box-shadow:0_8px_25px_10px_rgba(150,154,221,0.22)]"
        >
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              className={`px-4 py-2 text-[15px] cursor-pointer rounded-lg hover:bg-[#f9fafb] ${
                selectedLang === lang.code ? "bg-[#edf2f7]" : ""
              }`}
              onSelect={() => {
                setSelectedLang(lang.code);
                setOpen(false);
              }}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
