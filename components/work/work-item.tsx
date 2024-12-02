import WorkIcon from "@/icons/work-icon";
import TimeframeIcon from "@/icons/timeframe-icon";
import { WorkItem as IWorkItem } from "@/types";
import Skill from "../skill";

interface WorkItemProps {
  workItem: IWorkItem;
}

export default function WorkItem({ workItem }: WorkItemProps) {
  return (
    <div className="flex flex-col max-w-[600px] mt-8 hover:translate-x-1 duration-300">
      <div className="flex lg:justify-between flex-col lg:flex-row ">
        <div className="flex lg:items-center flex-col lg:flex-row justify-start ">
          <div className="text-secondary items-center flex-wrap">
            <div className="inline-flex items-center relative top-1">
              <WorkIcon
                fill="#FF6F3C"
                height={20}
                width={20}
                className="mr-1"
              />
              <span className="mr-1 lg:hidden">Project type:</span>
            </div>
            <span className="text-tertiary ">{workItem.project_type}</span>
          </div>
        </div>
        <div className="flex items-center mt-1 justify-start">
          <TimeframeIcon
            fill="#FF6F3C"
            height={20}
            width={20}
            className="lg:hidden mr-1"
          />
          <span className="text-secondary lg:hidden">Project duration:</span>
          <TimeframeIcon
            fill="#FF6F3C"
            height={20}
            width={20}
            className="hidden lg:block"
          />
          <span className="ml-1 text-tertiary">{`${workItem.timeframe}`}</span>
        </div>
      </div>
      <p className="mt-2">{workItem.description}</p>
      <div className="flex flex-wrap mt-2">
        {workItem.skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
