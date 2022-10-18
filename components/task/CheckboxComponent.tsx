import { useState } from "react";
import {
  MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox
} from "react-icons/md";

const checkedIcon: any =
  <MdOutlineCheckBox className="w-12 h-12 text-white" />;
const uncheckedIcon: any =
  <MdOutlineCheckBoxOutlineBlank className="w-12 h-12 text-white" />;

interface Props {
  taskId: string;
}

export default function CheckboxComponent(props: Props) {
  const [isChecked, setChecked] = useState(false);

  /**
   * Checkout the checkbox
   */
  function handleClick(): void {
    setChecked(true);
    fetch("/api/tasks/" + props.taskId, {method: "POST"});
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
      <button onClick={handleClick}>
        {getIcon()}
      </button>
    </>
  )
}