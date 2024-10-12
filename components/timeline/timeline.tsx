"use client";
import { useRef } from "react";
import Pin from "./pin";
import Years from "./years";
import timelineYears from "./years.json";
import Achievement from "./achievement";
import usePinClickAndDrag from "./hooks/usePinClickAndDrag";

export default function Timeline() {
  const yearsContainerRef = useRef(null);
  const { xOffset } = usePinClickAndDrag(yearsContainerRef);

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Achievement year={timelineYears[0]} />
      <div className="relative" ref={yearsContainerRef}>
        <Years years={timelineYears} />
        <Pin xOffset={xOffset} />
      </div>
      <div className="mt-2">
        <button className="mr-8">previous</button>
        <button className="">next</button>
      </div>
    </section>
  );
}
