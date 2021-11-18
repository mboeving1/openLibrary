import reviewInterface from "../models/reviewInterface";
import "./ReviewList.css";

interface Props {
  reviews: reviewInterface;
}

export default function ReviewList({ reviews }: Props) {
  return (
    <div className="mySlides">
      <q>{reviews.review}</q>
      <p className="author">- {reviews.username}</p>
    </div>
    // <div>
    //   <p>Name: {reviews.username}</p>
    //   <p>Review: {reviews.review}</p>
    // </div>
  );
}
