import reviewInterface from "../models/reviewInterface";

interface Props {
  reviews: reviewInterface[];
}

export default function ReviewList({ reviews }: Props) {
  return (
    <div>
      <ul>
        {reviews.map((review, index) => {
          return (
            <li key={index}>
              <p>Id: {review._id}</p>
              <p>Name:{review.username}</p>
              <p>Review:{review.review}</p>
              <p>ISBN: {review.isbn}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
