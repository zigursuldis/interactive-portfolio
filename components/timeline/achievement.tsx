import { TimelineYear } from "@/types";

interface AchievementProps {
  year: TimelineYear;
}

export default function Achievement({ year }: AchievementProps) {
  return (
    //for animation, provide key so component actually is remounted
    <h3
      className="flex justify-center items-center mt-10 lg:mt-20 mx-4 lg:mx-8 animate-fall"
      key={year.id}
    >
      {year.description}
    </h3>
  );
}
