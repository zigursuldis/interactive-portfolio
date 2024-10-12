"use client";
import { useState } from "react";
import Pin from "./pin";
import Years from "./years";
import years from "./years.json";
import Achievement from "./achievement";

export default function Timeline() {
  const [timelineYears, setTimelineYears] = useState(years);
  const [pinXOffset, setPinXOffset] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <Achievement year={years[0]} />
      <div className="relative">
        <Years years={timelineYears} />
        <Pin xOffset={pinXOffset} />
      </div>
    </section>
  );
}
