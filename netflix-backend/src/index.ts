import express from "express";
import MongoClient from "mongodb";

const app = express();

const port = process.env.PORT || 3010;

const connectionString =
  "mongodb+srv://Gi:M0NG0P4ssword@cluster0.3qjoe.mongodb.net/NetflixDB?retryWrites=true&w=majority";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Netflix Database");
    const db = client.db("NetflixDB");

    app.get("/", (req, res) => {
      db.collection("netflixData")
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
        })
        .catch((error) => console.error(error));
      // ...
    });

    /*app.get("/search", (req, res) => {
      db.collection("netflixData")
        .find({ type: "TV Show" })
        .toArray()
        .then((size) => {
          size.map((element) => {
            console.log(size);
          });
        });
      // ...
    });*/
  })
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
