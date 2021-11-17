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
import "./BookList.css";

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
        <div className="container">
          <NavLink
            className="home"
            to="/"
            style={{ color: "white", fontSize: "25px" }}
          >
            Home
          </NavLink>

          <div className="titleDiv">
            <h1 className="title">BookDrive</h1>
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
          <Route path="/books/details/:targetISBN/works/:bookKey/:amazon">
            {/* <BookDescriptions description={BookDescriptions?.toString()} ISBN={BookDescriptions?.ISBN.bib_key} details={BookDescriptions?.toString()}/>
            > */}
            {/* <BookDescriptions element={<}/> */}
            <BookDescriptions />
          </Route>
          <Route exact path="/">
            <BookSearchForm onSubmit={onSubmit} />
            <div className="result">
              {bookSearchResponse?.docs?.map((doc, index) => {
                if (doc.id_amazon) {
                  console.log("this is the amazon # console", doc.id_amazon[0]);
                  return (
                    <div key={index}>
                      <BookHit
                        author_name={doc.author_name}
                        isbn={doc.isbn}
                        title={doc.title}
                        cover_i={doc.cover_i}
                        bookKey={doc.key}
                        id_amazon={doc.id_amazon}
                      />
                      {/* {doc.key} */}
                    </div>
                  );
                }
              })}
            </div>
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
