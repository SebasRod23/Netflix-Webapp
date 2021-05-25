import express from "express";
import { Db } from "mongodb";
import Data from "../models/data.model";

const searchInfoRouter = express.Router();

searchInfoRouter.get("/movieList", async (req, res) => {
  let inputSearch = req.query.searchValue;
  interface requestType {
    _id: string;
  }
  Data.aggregate([
    { $match: { $text: { $search: inputSearch }, type: "Movie" } },
    {
      $group: {
        _id: "$title",
      },
    },
    { $limit: 10 },
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

searchInfoRouter.get("/actorList", async (req, res) => {
  let inputSearch = req.query.searchValue;
  interface requestType {
    _id: string;
  }
  Data.aggregate([
    { $match: { $text: { $search: inputSearch } } },
    { $project: { actor: { $split: ["$cast", ", "] }, qty: 1 } },
    { $unwind: "$actor" },
    {
      $group: {
        _id: "$actor",
      },
    },
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

searchInfoRouter.get("/tvshowList", async (req, res) => {
  let inputSearch = req.query.searchValue;
  interface requestType {
    _id: string;
  }
  Data.aggregate([
    { $match: { $text: { $search: inputSearch }, type: "TV Show" } },
    {
      $group: {
        _id: "$title",
      },
    },
    { $limit: 10 },
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

export default searchInfoRouter;
