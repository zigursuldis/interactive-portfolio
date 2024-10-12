import { TimelineYear } from "@/types";

interface AchievementProps {
  year: TimelineYear;
}

export default function Achievement({ year }: AchievementProps) {
  return <h3 className="mb-20 mt-10">{year.description}</h3>;
}
