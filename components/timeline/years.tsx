import { TimelineYear } from "@/types";

interface YearsProps {
  years: TimelineYear[];
  onActiveYearChange?: (year: TimelineYear) => unknown;
}

export default function Years({ years }: YearsProps) {
  return (
    <div className="flex h-8 items-end">
      {years.map((timelineYear, index) => {
        const isLastYear = index === years?.length - 1;
        return (
          <div
            key={timelineYear.id}
            className={`bg-white opacity-50  w-[2px] ${
              index % 2 === 0 ? "h-6" : "h-4"
            } ${!isLastYear ? "mr-4 md:mr-8" : ""}`}
          ></div>
        );
      })}
    </div>
  );
}
