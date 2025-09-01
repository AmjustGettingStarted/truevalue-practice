import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locations } from "@/constants/header";
import { navbar_items } from "@/constants/header";
import { Button } from "../ui/button";
import {
  ArrowLeftRight,
  Heart,
  LucideCarFront,
  Search,
  User,
} from "lucide-react";
import kmlogo from "@/public/assets/header/km_logo.png";
import mslogo from "@/public/assets/header/arena_logo.png";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10  w-full flex flex-col ">
      {/* Top Header */}
      {/* <div className="flex items-center justify-between bg-[#f5f5ff] p-4">
        Top Left Header
        <div className="flex gap-8 items-center">
          <Image
            width={148}
            height={59}
            alt="kalani motors logo"
            src={kmlogo}
          />
          <Select>
            <SelectTrigger className="w-[120px] border-none shadow-none cursor-pointer">
              <SelectValue placeholder={locations[0]} />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location, i) => (
                <SelectItem value={location} key={i}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        Top Right Header
        <div className="flex items-center gap-4">
          <Button
            variant={`outline`}
            className="bg-transparent border-none shadow-none cursor-pointer"
          >
            <User /> Login / Resister
          </Button>
          <Image
            width={208}
            height={23}
            alt="Maruti Suzuki Logo"
            src={mslogo}
          />
        </div>
      </div> */}
      {/* Bottom Header */}
      <div className="flex items-center justify-between text-white p-4 bg-black/30 backdrop-blur-xs  ">
        {/* Left */}
        <div className="w-[10%]"></div>
        {/* Middle */}
        <div className="flex-1 flex items-center justify-center rounded-md">
          {navbar_items.map((item, i) => (
            <Button
              key={item}
              variant={`ghost`}
              className="border-none shadow-none cursor-pointer"
            >
              {item}
            </Button>
          ))}
        </div>
        {/* Right */}
        <div className="w-[15%] flex items-center justify-end gap-2">
          {/* Icons */}
          <div className="flex items-center gap-0">
            <Button variant={`ghost`} className="cursor-pointer">
              <Search />
            </Button>
            <Button variant={`ghost`} className="cursor-pointer">
              <Heart />
            </Button>
            <Button variant={`ghost`} className="cursor-pointer">
              <ArrowLeftRight />
            </Button>
          </div>
          <Button
            size={"lg"}
            variant={`ghost`}
            className="rounded-lg  border border-white cursor-pointer"
          >
            <LucideCarFront />
            Quick Enquiry
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
