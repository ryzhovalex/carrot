import Task from "../../core/task/Task";
import CheckboxComponent from "./CheckboxComponent";

interface Props {
  task: Task
}

export default function TaskComponent(props: Props) {
  let task: Task = props.task;

  return (
    <>
      <div className="text-white flex flex-row items-center">
        <CheckboxComponent taskId={task.id}/>
        <span className="text-center">{task.title}</span> 
      </div>
    </>
  )
}
