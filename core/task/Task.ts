import { Schema } from "mongoose";
import MongoService from "../base/MongoService";

const TaskSchema: Schema = new MongoService().create({
  title: {type: String, required: true},
  isCompleted: {type: Boolean, required: true},
  creationTimestamp
});

export default interface Task {
  id: string,
  title: string,
  isCompleted: boolean,
  creationDate: Date,
  completionDate: Date
}