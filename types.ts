export interface TimelineYear {
  id: string;
  description: string;
  year: number;
}

export interface WorkItem {
  id: string;
  project_type: string;
  company: string;
  company_type: string;
  description: string;
  skills: Array<string>;
}
