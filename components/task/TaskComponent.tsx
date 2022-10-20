import Task from "../../core/task/Task";
import { useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox
} from "react-icons/md";

const checkedIcon: any =
  <MdOutlineCheckBox className="w-12 h-12 text-white" />;
const uncheckedIcon: any =
  <MdOutlineCheckBoxOutlineBlank className="w-12 h-12 text-white" />;

interface Props {
  task: Task
}

export default function TaskComponent(props: Props) {
  const [isChecked, setChecked] = useState(false);
  let task: Task = props.task;

  /**
   * Checkout the checkbox
   */
  function handleClick(): void {
    setChecked(true);
    fetch("/api/tasks/" + props.task.id, {method: "POST"});
  }

  function getIcon(): any {
    if (isChecked) {
      return checkedIcon;
    } else {
      return uncheckedIcon;
    }
  }

  return (
    <>
      <div className="text-white flex flex-row items-center">
        <button onClick={handleClick}>
          {getIcon()}
        </button>
        <span className="text-center">{task.title}</span> 
      </div>
    </>
  )
}
