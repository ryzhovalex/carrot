import {
  MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox
} from "react-icons/md";

export default function Task(task: any) {
  return (
    <>
      <h1>Task:</h1>
      <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 text-white" />
      <MdOutlineCheckBox className="w-6 h-6 text-white" />
      {JSON.stringify(task)} 
    </>
  )
}
