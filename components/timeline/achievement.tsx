import { TimelineYear } from "@/types";

interface AchievementProps {
  year: TimelineYear;
}

export default function Achievement({ year }: AchievementProps) {
  return (
    //for animation, provide key so component actually is remounted
    <h3
      className="flex text-xl justify-center items-center mt-20 lg:mt-40 mx-4 lg:mx-8 animate-fall text-center"
      key={year?.id}
    >
      {year?.description}
    </h3>
  );
}
