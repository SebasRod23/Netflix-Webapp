import express from 'express';
import { Data, IData } from '../models/data.model';

const listRouter = express.Router();

listRouter.post('/', async (req, res) => {
  const data = await Data.find()
    .sort({ _id: 1 })
    .skip(req.body.skip)
    .limit(req.body.limit);
  res.send(data);
});

listRouter.get('/movie', (req, res) => {
  let skipInput = req.query.skip;
  let limitInput = req.query.limit;
  Data.aggregate([
    { $match: { type: 'Movie' } },
    { $sort: { _id: 1 } },
    { $skip: Number(skipInput) },
    { $limit: Number(limitInput) },
  ])
    .then((data: IData[]) => {
      res.send(data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

listRouter.get('/actor', (req, res) => {
  let skipInput = req.query.skip;
  let limitInput = req.query.limit;
  Data.aggregate([
    { $sort: { _id: 1 } },
    { $skip: Number(skipInput) },
    { $limit: Number(limitInput) },
  ])
    .then((data: IData[]) => {
      res.send(data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

listRouter.get('/tvshow', (req, res) => {
  let skipInput = req.query.skip;
  let limitInput = req.query.limit;
  Data.aggregate([
    { $match: { type: 'TV Show' } },
    { $sort: { _id: 1 } },
    { $skip: Number(skipInput) },
    { $limit: Number(limitInput) },
  ])
    .then((data: IData[]) => {
      res.send(data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

listRouter.get('/movie/:id', async (req, res) => {
  let movieName = req.params.id;
  Data.aggregate([
    { $match: { type: 'Movie' } },
    { $match: { title: movieName } },
  ])
    .then((data: IData[]) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

listRouter.get('/actor/:id', async (req, res) => {
  let actorName = req.params.id;
  Data.aggregate([{ $match: { $expr: { $in: [actorName, '$castList'] } } }])
    .then((data: IData[]) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

listRouter.get('/tvshow/:id', async (req, res) => {
  let tvShowName = req.params.id;

  Data.aggregate([
    { $match: { type: 'TV Show' } },
    { $match: { title: tvShowName } },
  ])
    .then((data: IData[]) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default listRouter;
