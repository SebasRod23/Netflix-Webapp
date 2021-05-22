import express from 'express';
import Data from '../models/data.model';

const router = express.Router();

router.get('/all', (req, res) => {
  interface requestType {
    _id: string;
    count: number;
  }
  Data.aggregate([
    {
      $group: {
        _id: '$type',
        count: { $sum: 1 },
      },
    },
  ])
    .then((data) => {
      let series: number[] = [];
      let labels: string[] = [];
      data.map((d: requestType) => {
        series.push(d.count);
        labels.push(d._id);
      });
      let response = {
        series,
        labels,
        chart: {
          type: 'pie',
        },
      };
      res.json(response);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

//COUNTRY
router.get('/country', (req, res) => {
  interface requestType {
    _id: string;
    count: number;
  }
  Data.aggregate([
    { $match: { type: 'Movie' } },
    { $match: { country: { $ne: '' } } },
    {
      $group: {
        _id: '$country',
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ])
    .then((data) => {
      let series: number[] = [];
      let labels: string[] = [];
      data.map((d: requestType) => {
        series.push(d.count);
        labels.push(d._id);
      });
      let response = {
        series,
        labels,
      };
      res.json(response);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.get('/country/:id', (req, res) => {
  let countryName = req.params.id;
  interface requestType {
    label: number;
    number: string;
  }
  Data.aggregate([
    { $match: { type: 'Movie' } },
    { $match: { country: countryName } },
    { $count: 'country' },
  ])
    .then((data) => {
      let moviePerCountry = data[0].country;
      let response = {
        label: countryName,
        number: moviePerCountry,
      };
      res.json(response);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

//YEAR

router.get('/year', (req, res) => {
  interface requestType {
    _id: string;
    count: number;
  }
  Data.aggregate([
    { $match: { type: 'TV Show' } },
    {
      $group: {
        _id: '$release_year',
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ])
    .then((data) => {
      let series: number[] = [];
      let labels: string[] = [];
      data.map((d: requestType) => {
        series.push(d.count);
        labels.push(d._id);
      });
      let response = {
        series,
        labels,
      };
      res.json(response);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.get('/year/:id', (req, res) => {
  let yearName = req.params.id;
  interface requestType {
    label: number;
    number: string;
  }
  console.log(Number(req.params.id));
  Data.aggregate([
    { $match: { release_year: Number(req.params.id) } },
    { $match: { type: 'TV Show' } },
    { $count: 'release_year' },
  ])
    .then((data) => {
      let seriesYear = data[0].release_year;
      let response = {
        label: yearName,
        number: seriesYear,
      };
      res.json(response);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
