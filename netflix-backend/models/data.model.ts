import mongoose, { Schema, Document } from "mongoose";

interface IData extends Document {
  show_id: string;
  type: string;
  title: string;
  director: string;
  cast: string;
  country: string;
  date_added: string;
  release_year: Number;
  rating: string;
  duration: string;
  listed_in: string;
  description: string;
}

const dataSchema: Schema = new Schema({
  show_id: { type: String },
  type: { type: String },
  title: { type: String },
  director: { type: String },
  cast: { type: String },
  country: { type: String },
  date_added: { type: String },
  release_year: { type: Number },
  rating: { type: String },
  duration: { type: String },
  listed_in: { type: String },
  description: { type: String },
});

// interface IData {
//   title: string;
// }

// const dataSchema: Schema = new Schema({
//   title: { type: String },
// });
const Data = mongoose.model<IData>("Data", dataSchema);

export default Data;
