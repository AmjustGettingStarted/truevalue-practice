import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import BodyTypeTabs from "./body-type-tabs";

const UsedCars = () => {
  return (
    <div className="py-24">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl">Used Cars By Body Type</h1>
            <Button
              variant={`ghost`}
              className="rounded-lg cursor-pointer border border-slate-200"
            >
              View all <MoveRight />
            </Button>
          </div>
          <div>
            <BodyTypeTabs />
          </div>
        </div>
      </div>
      UsedCars
    </div>
  );
};

export default UsedCars;
