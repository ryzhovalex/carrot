import Service from "../base/Service";
import Task from "./Task";

export default class TaskService extends Service {
  /**
   * Fetch task by id.
   * 
   * @param id id of the task
   * @return fetched task
   */
  find(id: string): Task {
    return {
      id: "1",
      title: "Make a coffee",
      isCompleted: false,
      creationTimestamp: Date.now()
    }
  }

  /**
   * Adds a task.
   * 
   * @param title Title of the task to be added
   * @return Task have been added
   */
  add(title: string): Task {
    
  }

  /**
   * Completes task with given id
   * 
   * @param id Id of the task
   * @return Task have been completed
   */
  complete(id: string): Task {
  }

  /**
   * Fetch all tasks.
   * 
   * @return Fetched tasks
   */
  findAll(): Task[] {
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