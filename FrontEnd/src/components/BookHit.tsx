import { version } from "process";
import { DocsEntity, BookEntity } from "../models/BookDetailsInterface";

export default function BookHit({
  author_name,
  isbn,
  title,
  cover_i,
}: BookEntity) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://covers.openlibrary.org/b/id/ ${cover_i} -L.jpg`} />
      <h2>{author_name}</h2>
    </div>
  );
}
// first published year
// button connecting to amazon ID
