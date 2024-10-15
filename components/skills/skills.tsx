import skills from "./skills.json";

export default function Skills() {
  return (
    <div className="flex flex-wrap mt-4 mb-8 lg:max-w-[600px]">
      {skills.skills.map((skill) => {
        return (
          <div
            key={skill}
            className="border-[1px] border-border-light m-1 opacity-75 p-[2px] hover:scale-110 duration-200"
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
}
