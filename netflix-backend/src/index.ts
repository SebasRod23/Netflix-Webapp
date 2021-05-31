import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import listRouter from '../routes/data';
import routerStatistics from '../routes/statisticsChart';
import searchInfoRouter from '../routes/searchInfo';
const app = express();

const port = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());
const uri =
  'mongodb+srv://Gi:M0NG0P4ssword@cluster0.3qjoe.mongodb.net/NetflixDB?retryWrites=true&w=majority';
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
const dataRouter = listRouter;
const statisticsRouter = routerStatistics;
const searchRouter = searchInfoRouter;
app.use('/list', dataRouter);
app.use('/statistics', statisticsRouter);
app.use('/search', searchRouter);
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
