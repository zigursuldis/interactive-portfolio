interface PinProps {
  xOffset: number;
}

export default function Pin({ xOffset }: PinProps) {
  return (
    <div
      className="w-[2px] h-8 bg-white absolute left-0 bottom-0"
      style={{
        transform: `translateX(${xOffset}px)`,
      }}
    >
      <div className="absolute top-[-5px] left-[-4px] w-[10px] h-[10px] rounded-full bg-accent"></div>
    </div>
  );
}
