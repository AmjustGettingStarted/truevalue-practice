import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { brands } from "@/constants/brands";
import { Card } from "../ui/card";
import Image from "next/image";

const BrowseByBrands = () => {
  return (
    <div className="w-full max-w-5xl py-8 mx-auto flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl ">Explore by Popular Brands</h1>
        <Button
          variant={"ghost"}
          className="rounded-xl border border-slate-200"
        >
          View all <MoveRight />
        </Button>
      </div>
      <div className="flex gap-4 items-center w-full overflow-x-auto">
        {brands.map((brand) => (
          <Card
            key={brand.name}
            className="shadow-none flex flex-col justify-center hover:shadow-md border-slate-200 min-w-[200px] h-[200px]"
          >
            <Image
              width={500}
              height={500}
              alt="logo"
              src={brand.img}
              className="object-contain w-[150] h-[80]"
              unoptimized
            />
            <h1 className="w-full text-center">{brand.name}</h1>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrowseByBrands;
