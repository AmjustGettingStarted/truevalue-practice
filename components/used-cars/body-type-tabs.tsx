import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { bodyTypes, carData } from "@/constants/used-cars";
import { CarType } from "@/types/car-data";
import CarCardVertical from "../common/car-card-verticle";

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
            {/* <div className="flex  w-full"> */}
            <div className="grid grid-cols-2 md:grid-cols-3">
              {carData
                .filter((car: CarType) => car.categorytype === type)
                .map((car: CarType) => (
                  // <CarCard key={car.slug} car={car} />
                  <CarCardVertical key={car.slug} car={car} />
                ))}
            </div>
          </TabsContent>
        ))}{" "}
      </Tabs>
    </div>
  );
};

export default BodyTypeTabs;
