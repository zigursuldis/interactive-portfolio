import WorkIcon from "@/icons/work-icon";
import { WorkItem as IWorkItem } from "@/types";
import Skill from "../skill";

interface WorkItemProps {
  workItem: IWorkItem;
}

export default function WorkItem({ workItem }: WorkItemProps) {
  return (
    <div className="flex flex-col max-w-[600px] mt-6 hover:translate-x-1 duration-300">
      <div className="flex items-center">
        <WorkIcon fill="#FF6F3C" height={20} width={20} />
        <span className="ml-1">{workItem.company}</span>
        <span className="ml-1 text-tertiary">{`(${workItem.company_type})`}</span>
      </div>
      <div className="text-secondary my-1">{workItem.project_type}</div>
      <p>{workItem.description}</p>
      <div className="flex flex-wrap mt-2">
        {workItem.skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
