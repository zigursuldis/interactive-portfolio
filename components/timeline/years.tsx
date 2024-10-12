import { TimelineYear } from "@/types";

interface YearsProps {
  years: TimelineYear[];
}

export default function Years({ years }: YearsProps) {
  return (
    <div className="flex h-8 items-end">
      {years.map((timelineYear, index) => {
        return (
          <div
            key={timelineYear.year}
            className={`bg-white opacity-50 mr-4 md:mr-8 w-[2px] ${
              index % 2 === 0 ? "h-6" : "h-4"
            }`}
          ></div>
        );
      })}
    </div>
  );
}
