import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { bodyTypes, carData } from "@/constants/used-cars";
import CarCardVertical from "../common/car-card-verticle";
import CarCard from "../common/car-card";
import { CarType } from "@/types/car-data";

const BodyTypeTabs = () => {
  return (
    <div>
      <Tabs defaultValue={bodyTypes[0]} className="">
        <TabsList className="bg-transparent">
          {bodyTypes.map((item) => (
            <TabsTrigger
              key={item}
              value={item}
              className="w-fit  data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-[#FF7101] rounded-none pb-4 cursor-pointer"
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        {bodyTypes.map((type) => (
          <TabsContent
            key={type}
            value={type}
            className="w-full border-t-slate-400"
          >
            {/* <div className="flex flex-col  w-full"> */}
            <div className="flex space-x-4 items-start">
              {carData
                .filter((car: CarType) => car.categorytype === type)
                .map((car: CarType) => (
                  <CarCardVertical key={car.slug} car={car} />
                ))}
            </div>
            <div className="flex flex-col py-4 space-y-4  w-full">
              {carData
                .filter((car: CarType) => car.categorytype === type)
                .map((car: CarType) => (
                  <CarCard key={car.slug} car={car} />
                ))}
            </div>
          </TabsContent>
        ))}{" "}
      </Tabs>
    </div>
  );
};

export default BodyTypeTabs;
