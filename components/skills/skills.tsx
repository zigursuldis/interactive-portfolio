import Skill from "../skill";
import skills from "./skills-data.json";

export default function Skills() {
  return (
    <div className="flex flex-wrap mt-4 mb-8 lg:max-w-[600px]">
      {skills.skills.map((skill) => {
        return <Skill skill={skill} key={skill} />;
      })}
    </div>
  );
}
