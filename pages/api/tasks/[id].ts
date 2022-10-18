import type { NextApiRequest, NextApiResponse } from 'next'
import TaskService from '../../../core/task/TaskService';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const taskService: TaskService = new TaskService();

  if (typeof req.query.id === "string") {
    const taskId: string = req.query.id;

    switch (req.method) {
      case "GET":
        res.status(200).json(taskService.find(taskId));
        break;
      case "POST":
        res.status(200).json(taskService.complete(taskId))
        break;
      default:
        res.status(405).json({
          "message": "Unsupported method",
          "type": "error"
        });
        break;
    }
  } else {
    res.status(400).json({
      "message": "Given id path var is not a string",
      "type": "error"
    })
  }
}