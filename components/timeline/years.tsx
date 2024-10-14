import { TimelineYear } from "@/types";

interface YearsProps {
  years: TimelineYear[];
  activeYear: TimelineYear;
}

export default function Years({ years, activeYear }: YearsProps) {
  return (
    <div className="flex h-8 items-end cursor-pointer">
      {years.map((timelineYear, index) => {
        const isLastYear = index === years?.length - 1;
        const isActiveYear = activeYear.id === timelineYear.id;
        return (
          <div
            key={timelineYear.id}
            draggable={false}
            className={`bg-white w-[2px] ${index % 2 === 0 ? "h-6" : "h-4"} ${
              !isLastYear ? "mr-4 md:mr-6" : ""
            } ${isActiveYear ? "" : "opacity-40"}`}
          ></div>
        );
      })}
    </div>
  );
}
