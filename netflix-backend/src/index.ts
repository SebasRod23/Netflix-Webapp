import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import listRouter from '../routes/data';
import routerStatistics from '../routes/statisticsChart';
import searchInfoRouter from '../routes/searchInfo';
import path from "path";
const app = express();

const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, '..','..','netflix-webapp','build')));
app.use(cors());
app.use(express.json());
const uri =
  'mongodb+srv://Gi:M0NG0P4ssword@cluster0.3qjoe.mongodb.net/NetflixDB?retryWrites=true&w=majority';

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
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../netflix-webapp/build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
