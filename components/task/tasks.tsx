import { useEffect, useState } from "react"
import useSWR from "swr";
import Task from "./task";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Tasks() {
  const { data, error } = useSWR('/api/tasks', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <p>Loading...</p>

  // Collect tasks
  let tasks: any[] = [];
  for (let task of data) tasks.push(<Task task={task} />);
  console.log(tasks)

  return (
    <>
      <div>{tasks}</div>
    </>
  )
}
