import axios from "axios";
import reviewInterface from "../models/reviewInterface";

const baseUrl = "http://localhost:5001/bookdrive-e6992/us-central1/api";
// const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function fetchAllReviews(): Promise<reviewInterface[]> {
  return axios
    .get<reviewInterface[]>(`${baseUrl}/reviews`)
    .then((res) => res.data);
}

// export function pushReviews(
//   id: string,
//   review: reviewInterface
// ): Promise<reviewInterface> {
//   return axios
//     .post<reviewInterface>(`${baseUrl}/reviews/${id}`, review)
//     .then((res) => res.data);
// }

export function addReview(review: reviewInterface): Promise<reviewInterface> {
  return axios
    .post<reviewInterface>(`${baseUrl}/reviews`, review)
    .then((res) => res.data);
}
