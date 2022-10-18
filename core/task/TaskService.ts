import Service from "../base/Service";
import Task from "./Task";

export default class TaskService extends Service {
  /**
   * Fetch all tasks.
   * 
   * @return Fetched tasks
   */
  getTasks(): Task[] {
    return [
      {
        id: "1",
        title: "Make a coffee",
        isCompleted: false,
        creationTimestamp: Date.now()
      },
      {
        id: "2",
        title: "Pet a cat",
        isCompleted: false,
        creationTimestamp: Date.now()
      },
      {
        id: "3",
        title: "Send your code to Elon Musk",
        isCompleted: false,
        creationTimestamp: Date.now()
      },
    ]
  }
}