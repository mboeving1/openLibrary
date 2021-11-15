import getBooks from "../services/GetBooks";
import BookSearchForm from "./BookSearchForm";
import SearchParams from "../models/SearchParams";
import {
  BookDetailInterface,
  BookInterface,
  DocsEntity,
  BookEntity,
} from "../models/BookDetailsInterface";
import { useState, useEffect } from "react";
import BookHit from "./BookHit";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import FavoritesList from "./FavoritesList";
// import FavoritesProvider from "../context/FavoritesProvider";
import BookDescriptions from "./BookDescriptions";
import getBooksResponse from "../services/getBooksResponse";
import { BookISBNInterface } from "../models/BookISBNInterface";
import "./BookList.css";
import { domainToASCII } from "url";

export default function BookList() {
  const [bookSearchResponse, setBookSearchResponse] =
    useState<BookDetailInterface>(); //this gives us a place to save the data instead of just console logging it which the getBooks function does
  function onSubmit(searchQuery: string): void {
    //using searchQuery as parameter

    getBooks(searchQuery).then(
      (data) => setBookSearchResponse(data) //uses searchQuery bc it's the parameter of onSubmit
    );
  }

  return (
    <div>
      <Router>
        <div className="header">
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink className="favorites" to="/books/favorites" exact>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </NavLink>
          <div className="titleDiv">
            <h1 className="title">Search the Library</h1>
          </div>
        </div>
        {/* <button
        onClick={() => {
          getBooks();
        }}
      >
        Get axios Response
      </button> */}
        <Switch>
          {/* <FavoritesProvider> */}
          <Route path="/books/favorites" exact>
            <FavoritesList />
          </Route>
          <Route path="/books/details/:targetISBN/works/:bookKey/:id_amazon">
            {/* <BookDescriptions description={BookDescriptions?.toString()} ISBN={BookDescriptions?.ISBN.bib_key} details={BookDescriptions?.toString()}/>
            > */}
            {/* <BookDescriptions element={<}/> */}
            <BookDescriptions />
          </Route>
          <Route exact path="/">
            <BookSearchForm onSubmit={onSubmit} />

            {bookSearchResponse?.docs?.map((doc, index) => {
              if (doc.id_amazon) {
                console.log("good reads console", doc.id_amazon[0]);
                return (
                  <div key={index}>
                    <BookHit
                      author_name={doc.author_name}
                      isbn={doc.isbn}
                      title={doc.title}
                      cover_i={doc.cover_i}
                      bookKey={doc.key}
                    />
                    {/* {doc.key} */}
                  </div>
                );
              }
            })}
          </Route>
          {/* </FavoritesProvider> */}
        </Switch>
        {/* the getBooks() just console logs, doesn't save it anywhere */}

        {/* for every bookSearchResponse, for every hit and it's index, give us a
      paragraph that says 1 hit */}
      </Router>
    </div>
  );
}
