import type { CarType } from "@/types/car-data";
import { Card } from "../ui/card";
import Image from "next/image";
import {
  ArrowLeftRight,
  Fuel,
  Gauge,
  GitGraphIcon,
  Heart,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import checkLogo from "@/public/assets/car-card/check.svg";
import { Badge } from "../ui/badge";
import { PaginationEllipsis } from "../ui/pagination";

export default function CarCardVertical({ car }: { car: CarType }) {
  console.log("car: ", car);
  return (
    <Card className="shadow-none hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500  rounded-lg border-slate-200 py-0 max-w-[300px] shrink-0">
      <div className="flex flex-col items-start w-full">
        {/* Car Image + Left Side */}
        <div className="relative flex flex-col">
          <Image
            width={1000}
            height={1000}
            src={car.img}
            alt="Car Image"
            className="object-cover rounded-t-lg z-0 shrink-0 w-[300px] h-[225px]"
          />
          {/* Top Left Badges */}
          <div className="absolute top-0 left-0 w-fit flex gap-2 p-2">
            <Badge
              variant="outline"
              className="bg-[#FF7101] rounded-full text-white capitalize "
            >
              {car.status}
            </Badge>
            <Badge
              variant="outline"
              className="bg-[#FF7101] rounded-full text-white capitalize "
            >
              {car.year}
            </Badge>
          </div>
          {/* Top Right Buttons */}
          <div className="absolute p-2 flex flex-col gap-2 top-0 right-0 items-center">
            <Button
              variant={`ghost`}
              className="rounded-full text-[#FF7101] hover:text-white hover:bg-[#FF7101] cursor-pointer bg-white size-8 flex object-center"
            >
              <ArrowLeftRight className="size-4 " />
            </Button>
            <Button
              variant={`ghost`}
              className="rounded-full text-[#FF7101] hover:text-white hover:bg-[#FF7101] cursor-pointer bg-white size-8 flex object-center"
            >
              <Heart className="size-4 " />
            </Button>
          </div>
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-fit p-2 ">
            <Badge
              variant={"secondary"}
              className="w-fit bg-[linear-gradient(88deg,#B3FFB6_33.23%,#FFF_98.34%)] rounded-full text-xs"
            >
              <ShieldCheckIcon />
              Verfied
            </Badge>
          </div>
          {/* Bottom Image Pagination */}
          <div className="absolute bottom-0 left-1/2 -ml-4 ">
            <PaginationEllipsis className="text-white " />
          </div>
        </div>
        {/* MID Section */}
        <div className="flex flex-col items-start p-4 space-y-6 w-full">
          {/* Middle  */}
          <div className="flex flex-col space-y-1 ">
            <p className="text-[#FF7101] text-sm">{car.categorytype}</p>
            <h1 className="capitalize font-medium text-xl line-clamp-1">
              {car.year} {car.slug.replaceAll("-", " ")}
            </h1>
            <div className="flex items-center w-full text-xs space-x-4 text-[#696665] font-light">
              <p className="flex items-center gap-2">
                <Gauge className="size-5" />
                {car.km}
              </p>
              <p className="flex items-center gap-2">
                <Fuel className="size-5" />
                {car.fuelType}
              </p>
              <p className="flex items-center gap-2">
                <GitGraphIcon className="size-5" />
                {car.transmission}
              </p>
            </div>
            <div className="flex items-end  gap-2 pt-2">
              <p className="text-[#FF7101] text-xl ">₹ {car.price - 1}</p>
              <p className="text-[#B6B6B6]   line-through ">₹ {car.price}</p>
            </div>
            {/* Visible in LG, Hidden in SM */}
          </div>
          {/* Bottom */}
          <div className="flex border-t w-full justify-between items-center border-t-[#DDD] pt-6">
            {/* True value Logo */}
            <div className="flex items-center gap-1">
              <div>
                <Image
                  width={38}
                  height={38}
                  alt="check mark"
                  src={checkLogo}
                  className="object-cover"
                />
              </div>
              <div className="tracking-tight text-sm text-[#24272C]">
                <h3>TrueValue</h3>
              </div>
            </div>
            <Button
              variant={`ghost`}
              className="cursor-pointer text-[#FF7101] border border-[#FF7101] hover:text-white hover:bg-[#ff7101] rounded-xl"
            >
              View Car
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
