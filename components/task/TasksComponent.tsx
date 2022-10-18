import { useEffect, useState } from "react"
import useSWR from "swr";
import Task from "../../core/task/Task";
import TaskComponent from "./TaskComponent";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TasksComponent() {
  const { data, error } = useSWR('/api/tasks', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <p>Loading...</p>

  // Collect tasks
  let tasks: Task[] = data;
  let taskComponents: JSX.Element[] = [];

  for (let task of tasks) {
    taskComponents.push(
      <li key={task.id}>
        <TaskComponent task={task} />
      </li>
    );
  };

  return (
    <>
      <div className="sm:container mx-auto text-3xl mt-5">
        <ul>
          {taskComponents}
        </ul>
      </div>
    </>
  )
}
