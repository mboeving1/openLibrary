import {
  DocsEntity,
  BookEntity,
  BookDetailInterface,
} from "../models/BookDetailsInterface";
import { useState, useEffect } from "react";
import getBooks from "../services/GetBooks";
import { useContext } from "react";
import { Favorites } from "../context/FavoritesProvider";
import BookInfo from "../models/BookInfoInterface";
import { Link } from "react-router-dom";
import getBooksResponse from "../services/getBooksResponse";

export default function BookHit(
  { author_name, isbn, title, cover_i, key }: BookEntity,
  { description }: BookInfo
) {
  // const id = `https://openlibrary.org/works/${key}/${title.replaceAll(
  //   " ",
  //   "_"
  // )}`;

  // const [details, setDetails] = useState<BookInfo>();

  // const fetchedDetails = useEffect(() => {
  //   getBooksResponse(key).then((description) => setDetails(description));
  // }, []);

  // console.log("this is the key:", { key });
  return (
    <div className="book">
      <Link className="linkToDescription" to={key}>
        <h1>{title}</h1>
      </Link>
      <h1>{key}</h1>
      <img src={`https://covers.openlibrary.org/b/id/ ${cover_i} -L.jpg`} />
      <h2>{author_name}</h2>
      {/* <h3>
        source: <a href={id}>{id}</a>
      </h3> */}
      {/* <p>{key}</p> */}
    </div>
  );
}
// first published year
// button connecting to amazon ID
