// NEEDS TO BE UPDATED WITH OUR FILENAMES AND SUCH

import express from "express";
import { getClient } from "../db";
// import { ObjectId } from 'mongodb';
import reviewInterface from "../models/reviewInterface";

const routes = express.Router();

routes.get("/reviews", async (req, res) => {
  //update with our route
  try {
    const client = await getClient();
    const results = await client
      .db("BookDrive")
      .collection<reviewInterface>("BookDrive")
      .find()
      .toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

routes.post("/reviews", async (req, res) => {
  const review = req.body as reviewInterface;
  try {
    const client = await getClient();
    await client
      .db("BookDrive")
      .collection<reviewInterface>("BookDrive")
      .insertOne(review);
    res.status(201).json(review);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Service Error." });
  }
});

export default routes;
