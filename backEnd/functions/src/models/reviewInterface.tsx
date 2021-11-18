// THIS NEEDS TO LOOK LIKE A REVIEW I THINK

import { ObjectId } from "mongodb";

export default interface reviewInterface {
  _id?: ObjectId;
  username: string;
  review: string;
  isbn: string;
  // rating: number;
}
