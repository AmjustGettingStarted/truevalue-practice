import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { allCars, sellCars } from "@/constants/hero";
import { Button } from "../ui/button";
import { ChevronRight, Search, Zap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

const HeroTab = () => {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden">
      <Tabs
        defaultValue="allCar"
        className="w-full max-w-5xl mx-auto gap-0  rounded-lg"
      >
        <TabsList className="rounded-t-lg rounded-b-none w-xs bg-white/20 p-0 text-white ">
          <TabsTrigger
            className="data-[state=active]:bg-[#4D44F9]   rounded-none rounded-tl-lg cursor-pointer text-white"
            value="allCar"
          >
            All Cars
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#4D44F9]  rounded-none cursor-pointer text-white"
            value="buyCar"
          >
            Buy Car
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#4D44F9] rounded-none rounded-tr-lg  cursor-pointer text-white"
            value="sellCar"
          >
            Sell Car
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="allCar"
          className="bg-white rounded-lg rounded-tl-none py-4 "
        >
          <div className="flex  justify-around items-center">
            {allCars.map((item, i) => (
              <div key={item} className="flex flex-col ">
                <p className="font-medium text-sm">{item}</p>
                <Select>
                  <SelectTrigger
                    size="sm"
                    className="w-fit border-none shadow-none  text-xs px-0 py-0 data-[placeholder]:text-black cursor-pointer"
                  >
                    <SelectValue placeholder={`Select ${item}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
            <Button className="h-12 rounded-lg w-[204px] cursor-pointer bg-[#FF7101]">
              Find cars
              <Search />
            </Button>
          </div>
        </TabsContent>
        <TabsContent
          value="buyCar"
          className="bg-white rounded-lg rounded-tl-none py-4 "
        >
          <div className="flex  justify-around items-center">
            {allCars.map((item, i) => (
              <div key={item} className="flex flex-col ">
                <p className="font-medium text-sm">{item}</p>
                <Select>
                  <SelectTrigger
                    size="sm"
                    className="w-fit border-none shadow-none  text-xs px-0 py-0 data-[placeholder]:text-black cursor-pointer"
                  >
                    <SelectValue placeholder={`Select ${item}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
            <Button className="h-12 rounded-lg w-[204px] cursor-pointer bg-[#FF7101]">
              Find cars
              <Search />
            </Button>
          </div>
        </TabsContent>

        <TabsContent
          value="sellCar"
          className="bg-[#Ffffff]   rounded-lg rounded-tl-none"
        >
          <div className="h-[84px] px-8 flex justify-between items-center">
            <div className="flex space-x-4 my-2 items-center">
              {sellCars.map((item) => (
                <Input
                  key={item.label}
                  className="h-8 border-[0.5px] focus-visible:border-black focus-visible:ring-0 w-[120px]  border-black shadow-none placeholder:text-center placeholder:text-custom-text-secondary/75 rounded-sm text-start "
                  placeholder={`${item.label}`}
                  maxLength={item.maxLength}
                />
              ))}
            </div>
            <Button className="h-12 rounded-lg w-[204px] cursor-pointer bg-[#FF7101]">
              Next <ChevronRight />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex gap-4 w-full max-w-5xl mx-auto text-xs text-white">
        <Zap className="size-4" />
        <p>
          Trending: Volkswagen Scirocco, Honda Civic, Audi A3, Toyota Vios,
          Nissan GTR, Subaru Impreza
        </p>
      </div>
    </div>
  );
};

export default HeroTab;
