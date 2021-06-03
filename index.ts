import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import listRouter from './routes/data';
import routerStatistics from './routes/statisticsChart';
import searchInfoRouter from './routes/searchInfo';
import path from 'path';
const app = express();

const port = process.env.PORT || 5000;
app.use(express.static(path.resolve(__dirname, "./netflix-frontend/build")));
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
})

app.use('/list',listRouter);
app.use('/statistics', routerStatistics);
app.use('/search', searchInfoRouter);
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./netflix-frontend/build", "index.html"));
});
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
