import express from 'express';
import Data from '../models/data.model';

const listRouter = express.Router();

listRouter.post('/', async (req, res) => {
  const data = await Data.find()
    .sort({ _id: 1 })
    .skip(req.body.skip)
    .limit(req.body.limit);
  res.send(data);
});

export default listRouter;
