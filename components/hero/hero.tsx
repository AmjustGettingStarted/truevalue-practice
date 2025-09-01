"use client";
import Image from "next/image";
import React from "react";
import banner from "@/public/assets/hero/banner.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroTab from "./hero-tab";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <div className="mt-[50px] relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full min-h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i}>
              <Image
                width={1920}
                height={960}
                alt="Banner Image"
                src={banner}
                className="object-cover z-0 h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 size-12 rounded-lg cursor-pointer  bg-white/20 border-none text-white" />
        <CarouselNext className="right-8 size-12 rounded-lg cursor-pointer  bg-white/20 border-none text-white" />
      </Carousel>

      <div className=" absolute bottom-0 w-full mx-auto ">
        <HeroTab />
      </div>
    </div>
  );
};

export default Hero;
