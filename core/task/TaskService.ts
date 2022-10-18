import Service from "../base/Service";
import Task from "./Task";

export default class TaskService extends Service {
  /**
   * Fetch task by id.
   * 
   * @param id id of the task
   * @return fetched task
   */
  getTask(id: string): Task {
    return {
      id: "1",
      title: "Make a coffee",
      isCompleted: false,
      creationTimestamp: Date.now()
    }
  }

  /**
   * Completes task with given id
   * 
   * @param id Id of the task
   */
  completeTask(id: string): void {
  }

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
        title: "Send my code to Elon Musk",
        isCompleted: false,
        creationTimestamp: Date.now()
      },
    ]
  }
}