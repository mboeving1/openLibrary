import {
  DocsEntity,
  BookEntity,
  BookDetailInterface,
} from "../models/BookDetailsInterface";
import { useState, useEffect } from "react";
import getBooks from "../services/GetBooks";
import { useContext } from "react";
import { Favorites } from "../context/FavoritesProvider";
import BookInfo, { BookDetails } from "../models/BookInfoInterface";
import { Link } from "react-router-dom";
import getBooksResponse from "../services/getBooksResponse";
import BookDescriptions from "./BookDescriptions";

export default function BookHit(
  { author_name, isbn, title, cover_i, bookKey }: any,
  { description }: BookDetails
) {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("http://openlibrary.org/search.json?author=tolkien")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  const id = `https://openlibrary.org${bookKey}`;

  const [details, setDetails] = useState<BookDetails>();

  const fetchedDetails = useEffect(() => {
    getBooks(bookKey).then((data) => console.log(data));
  }, []);

  console.log("this is the key:", { bookKey });
  return (
    <div className="book">
      <Link
        className="linkToDescription"
        to="/books/details"

        // to="/description"
      >
        <h1>{title}</h1>
      </Link>
      <img src={`https://covers.openlibrary.org/b/id/ ${cover_i} -L.jpg`} />
      <h2>{author_name}</h2>`
      <h3>
        source: <a href={id}>{id}</a>
      </h3>
    </div>
  );
}
// first published year
// button connecting to amazon ID
