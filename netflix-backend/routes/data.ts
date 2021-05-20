import express from 'express';
import Data from '../models/data.model';

const router = express.Router();

router.route('/').get((req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
