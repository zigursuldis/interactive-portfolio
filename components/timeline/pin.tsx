import { TimelineYear } from "@/types";

interface PinProps {
  xOffset: number;
  activeYear: TimelineYear;
}

export default function Pin({ xOffset, activeYear }: PinProps) {
  return (
    <div
      className="w-[2px] h-8 bg-white absolute left-0 bottom-0 cursor-pointer select-none"
      style={{
        transform: `translateX(${xOffset}px)`,
      }}
      onDragStart={(e) => {
        e.preventDefault();
        return false;
      }}
      draggable={false}
    >
      <div className="absolute top-[-5px] left-[-4px] w-[10px] h-[10px] rounded-full bg-accent"></div>
      <div className="absolute -top-8 -left-4 opacity-75 select-none">
        {activeYear?.year}
      </div>
    </div>
  );
}
