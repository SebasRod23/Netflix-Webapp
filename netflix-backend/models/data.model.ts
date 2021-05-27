import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  show_id: string;
  type: 'Movie' | 'TV Show';
  title: string;
  director: string;
  cast: string;
  country: string;
  date_added: string;
  release_year: number;
  rating: string;
  duration: string;
  listed_in: string;
  description: string;
  castList: string[];
}

const dataSchema: Schema = new Schema({
  show_id: { type: String },
  type: { type: String, enum: ['Movie', 'TV Show'], default: 'Movie' },
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
  castList: [{ type: String }],
});

export const Data = mongoose.model<IData>('Data', dataSchema);

export default Data;
