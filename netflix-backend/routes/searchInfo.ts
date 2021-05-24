import express from "express";
import Data from "../models/data.model";

const router = express.Router();

router.get("/movieList", (req, res) => {
  interface requestType {
    _id: string;
  }
  Data.aggregate([
    { $match: { type: "Movie" } },
    {
      $group: {
        _id: "$title",
      },
    },
    { $sort: { _id: 1 } },
  ])
    .then((data) => {
      let labels: string[] = [];
      data.map((d: requestType) => {
        labels.push(d._id.toString());
      });
      res.json(labels);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.get("/actorList", (req, res) => {
//   interface requestType {
//     _id: string;
//   }
//   Data.aggregate([
//     {
//       $group: {
//         _id: "$release_year",
//       },
//     },
//     { $sort: { _id: 1 } },
//   ])
//     .then((data) => {
//       let labels: string[] = [];
//       data.map((d: requestType) => {
//         labels.push(d._id.toString());
//       });
//       res.json(labels);
//     })
//     .catch((err) => res.status(400).json("Error: " + err));
// });

router.get("/tvshowList", (req, res) => {
  interface requestType {
    _id: string;
  }
  Data.aggregate([
    { $match: { type: "TV Show" } },
    {
      $group: {
        _id: "$title",
      },
    },
    { $sort: { _id: 1 } },
  ])
    .then((data) => {
      let labels: string[] = [];
      data.map((d: requestType) => {
        labels.push(d._id.toString());
      });
      res.json(labels);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});
