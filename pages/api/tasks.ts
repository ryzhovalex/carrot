// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import TaskService from '../../core/task/TaskService';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const taskService: TaskService = new TaskService();

  let title: string = req.body.title;

  switch (req.method) {
    case "GET":
      res.status(200).json(new TaskService().findAll());
      break;
    case "POST":
      res.status(200).json(taskService.add(title))
      break;
    default:
      res.status(405).json({
        "message": "Unsupported method",
        "type": "error"
      });
      break;
  }
}
