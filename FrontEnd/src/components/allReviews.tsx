import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

import reviewInterface from "../models/reviewInterface";

import { fetchAllReviews } from "../services/bookReviewAPIservice";

export default function AllReviewsRoute() {
  const [reviews, setReviews] = useState<reviewInterface[]>([]);
  useEffect(() => {
    fetchAllReviews().then((res) => setReviews(res));
  }, []);

  return (
    <div>
      <ReviewList reviews={reviews} />;
    </div>
  );
}
