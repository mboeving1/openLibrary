import { BookDetails } from "../models/BookInfoInterface";
import { useParams } from "react-router";

interface RouteParams {
  key: string;
}

export default function BookDescriptions({ book }: any) {
  const { key } = useParams<RouteParams>();

  return <p>{description}</p>;
}
