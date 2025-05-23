interface SkillProps {
  skill: string;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <div
      key={skill}
      className="border border-border-light m-1 opacity-75 p-[2px] hover:scale-110 duration-200"
    >
      {skill}
    </div>
  );
}
