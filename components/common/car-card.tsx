import type { CarType } from "@/types/car-data";
import { Card } from "../ui/card";
import Image from "next/image";
import {
  ArrowLeftRight,
  Fuel,
  Gauge,
  GitGraph,
  Heart,
  MapPin,
  MoveRight,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import checkLogo from "@/public/assets/car-card/check.svg";
import tvlogo from "@/public/assets/car-card/true value.png";
import { Badge } from "../ui/badge";
import { PaginationEllipsis } from "../ui/pagination";

export default function CarCard({ car }: { car: CarType }) {
  console.log("car: ", car);
  return (
    <Card className="shadow-none hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500  rounded-lg border-slate-200 py-0 w-full ">
      <div className="flex flex-col md:flex-row items-start w-full">
        {/* Car Image + Left Side */}
        <div className="relative flex flex-col w-[35%] ">
          <Image
            width={1000}
            height={1000}
            src={car.img}
            alt="Car Image"
            className="object-cover rounded-l-lg z-0 shrink-0 h-[230] "
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
            <PaginationEllipsis className="text-white  " />
          </div>
        </div>
        {/* Right Part */}
        <div className="flex items-center justify-between p-4 flex-1">
          {/* Middle  */}
          <div className="flex flex-col  space-y-4">
            <div className="space-y-2">
              <p className="text-[#FF7101] text-sm">{car.categorytype}</p>
              <h1 className="capitalize font-medium text-xl">
                {car.year} {car.slug.replaceAll("-", " ")}
              </h1>
              <div className="flex items-center w-full space-x-4 text-[#696665] font-light">
                <p className="flex items-center gap-2">
                  <Gauge className="size-5" />
                  {car.km}
                </p>
                <p className="flex items-center gap-2">
                  <Fuel className="size-5" />
                  {car.fuelType}
                </p>
                <p className="flex items-center gap-2">
                  <GitGraph className="size-5" />
                  {car.transmission}
                </p>
              </div>
            </div>
            <p className="text-[#FF7101] text-2xl">₹ {car.price}</p>
            {/* Visible in LG, Hidden in SM */}
            <div>
              <Button
                className="text-[#FF7101] border-[#FF7101] hover:text-white hover:bg-[#ff7101] cursor-pointer w-48 h-12"
                variant={`outline`}
              >
                View Car <MoveRight />
              </Button>
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-col  border-l py-2 items-center space-y-4  border-l-[#DDD] pl-6">
            {/* True value Logo */}
            <div className="flex items-center gap-2">
              <div>
                <Image
                  width={38}
                  height={38}
                  alt="check mark"
                  src={checkLogo}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Image
                  width={70}
                  height={10}
                  alt="check mark"
                  src={tvlogo}
                  className="object-cover"
                />
                <h3 className="text-xs text-[#24272C] tracking-tighter">
                  Certified
                </h3>
              </div>
            </div>
            <Button
              variant={`ghost`}
              className="cursor-pointer border-slate-200 w-48 border rounded-lg"
            >
              Enquiry
            </Button>
            <p className="flex items-center text-xs gap-2">
              <MapPin fill="blue" className="bg-white text-white" />
              Rajarajeshwari Nagar, Bengaluru.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
