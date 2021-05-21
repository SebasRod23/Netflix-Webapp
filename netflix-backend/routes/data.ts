import express from 'express';
import Data from '../models/data.model';

const router = express.Router();

router.post('/', async (req, res) => {
  const data = await Data.find({}, null, {
    skip: Number(req.body.skip),
    limit: Number(req.body.limit),
  });
  res.send(data);
});

export default router;
