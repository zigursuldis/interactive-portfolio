"use client";
import { useMemo, useRef } from "react";
import Pin from "./pin";
import Years from "./years";
import timelineYears from "./years.json";
import Achievement from "./achievement";
import usePinClickAndDrag from "./hooks/usePinClickAndDrag";
import useElementCoordinates from "./hooks/useElementCoordinates";

export default function Timeline() {
  const yearsContainerRef = useRef<HTMLDivElement>(null);
  const { xOffset: pinXOffset } = usePinClickAndDrag(yearsContainerRef);
  const refCoordinates = useElementCoordinates(yearsContainerRef);

  const activeYear = useMemo(() => {
    const timelineWidth = refCoordinates.x2 - refCoordinates.x;
    const yearSegmentFullWidth = timelineWidth / (timelineYears.length - 1);
    const pinSegmentOffset = pinXOffset / yearSegmentFullWidth;
    const pinFullSegmentOffset = Math.floor(pinXOffset / yearSegmentFullWidth);

    if (yearSegmentFullWidth === 0 || pinXOffset > refCoordinates.x2) {
      //on initial render return first item
      return timelineYears[0];
    }
    if (pinSegmentOffset - Math.floor(pinSegmentOffset) <= 0.5) {
      return timelineYears?.[pinFullSegmentOffset];
    } else {
      return timelineYears?.[pinFullSegmentOffset + 1];
    }
  }, [pinXOffset, refCoordinates]);

  return (
    <section>
      <div className="flex flex-col items-center justify-between h-[300px] lg:h-[400px] bg-bg-secondary mt-5">
        <Achievement year={activeYear} />
        <div className="relative mt-10" ref={yearsContainerRef}>
          <Years years={timelineYears} activeYear={activeYear} />
          <Pin xOffset={pinXOffset} activeYear={activeYear} />
        </div>
      </div>
      <div className="flex justify-center items-center opacity-75 text-sm mt-1 mb-8">
        click or drag on the timeline
      </div>
    </section>
  );
}
