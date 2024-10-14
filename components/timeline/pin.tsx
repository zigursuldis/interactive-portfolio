import { TimelineYear } from "@/types";

interface PinProps {
  xOffset: number;
  activeYear: TimelineYear;
  isDragging: boolean;
}

export default function Pin({ xOffset, activeYear, isDragging }: PinProps) {
  return (
    <div
      className="w-[2px] h-8 bg-white absolute left-0 bottom-0 cursor-pointer select-none"
      style={{
        transform: `translateX(${xOffset}px)`,
      }}
    >
      <div className="absolute top-[-5px] left-[-4px] w-[10px] h-[10px] rounded-full bg-accent"></div>
      <div className="absolute top-[-2rem] left-[-1rem] opacity-75 select-none">
        {activeYear?.year}
      </div>
    </div>
  );
}
