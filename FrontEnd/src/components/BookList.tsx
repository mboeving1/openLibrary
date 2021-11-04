import getBooks from "../services/GetBooks";
import BookSearchForm from "./BookSearchForm";
import SearchParams from "../models/SearchParams";
import {
  BookDetailInterface,
  BookInterface,
  DocsEntity,
  BookEntity,
} from "../models/BookDetailsInterface";
import { useState } from "react";
import BookHit from "./BookHit";

export default function BookList() {
  const [bookSearchResponse, setBookSearchResponse] =
    useState<BookDetailInterface>(); //this gives us a place to save the data instead of just console logging it which the getBooks function does
  function onSubmit(searchQuery: string): void {
    //using searchQuery as parameter

    getBooks(searchQuery).then((data) => setBookSearchResponse(data)); //uses searchQuery bc it's the parameter of onSubmit
  }
  return (
    <div className="header">
      <h1>Search the Library</h1>
      {/* <button
        onClick={() => {
          getBooks();
        }}
      >
        Get axios Response
      </button> */}
      <BookSearchForm onSubmit={onSubmit} />
      {/* the getBooks() just console logs, doesn't save it anywhere */}
      {bookSearchResponse?.docs?.map((doc, index) => (
        <BookHit
          author_name={doc.author_name}
          isbn={doc.isbn}
          title={doc.title}
          cover_i={doc.cover_i}
          key={index}
        />
      ))}
      {/* for every bookSearchResponse, for every hit and it's index, give us a
      paragraph that says 1 hit */}
    </div>
  );
}
