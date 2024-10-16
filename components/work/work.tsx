import WorkItem from "./work-item";
import workdata from "./work-data.json";

export default function Work() {
  return (
    <section className="mb-8 mt-6">
      {workdata.map((workItem) => (
        <WorkItem key={workItem.id} workItem={workItem} />
      ))}
    </section>
  );
}
