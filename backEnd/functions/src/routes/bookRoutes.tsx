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

export default routes;
