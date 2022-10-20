import mongoose from "mongoose";
import Service from "./Service";
const {Schema} = mongoose;

export default class MongoService extends Service {
  constructor() {
    super();
  }

  /**
   * Define a new schema.
   * 
   * @param props properties for a new schema
   * @return schema created
   */
  define(props: any): mongoose.Schema {
    return new Schema(props);
  }

  /**
   * Create a new model.
   * 
   * @param name name for a new model
   * @param schema schema for a new model
   * @return model created
   */
  create(name: string, schema: mongoose.Schema): mongoose.Model<any> {
    return mongoose.model(name, schema);
  }
}
