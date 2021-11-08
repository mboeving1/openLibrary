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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import FavoritesList from "./FavoritesList";
import FavoritesProvider from "../context/FavoritesProvider";
import BookDescriptions from "./BookDescriptions";
import exact from "react-router";

export default function BookList() {
  const [bookSearchResponse, setBookSearchResponse] =
    useState<BookDetailInterface>(); //this gives us a place to save the data instead of just console logging it which the getBooks function does
  function onSubmit(searchQuery: string): void {
    //using searchQuery as parameter

    getBooks(searchQuery).then((data) => setBookSearchResponse(data)); //uses searchQuery bc it's the parameter of onSubmit
  }
  return (
    <div>
      <Router>
        <div className="header">
          <NavLink className="home" to="/" exact>
            Home
          </NavLink>
          <NavLink className="favorites" to="/books/favorites" exact></NavLink>
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
          <FavoritesProvider>
            <Route path="/books/favorites">
              <FavoritesList />
            </Route>
            <Route exact path="/:key">
              <BookDescriptions />
            </Route>
            <Route path="/">
              <BookSearchForm onSubmit={onSubmit} />
              {bookSearchResponse?.docs?.map((doc, index) => (
                <BookHit
                  author_name={doc.author_name}
                  isbn={doc.isbn}
                  title={doc.title}
                  cover_i={doc.cover_i}
                  key={doc.key}
                />
              ))}
            </Route>
          </FavoritesProvider>
        </Switch>
        {/* the getBooks() just console logs, doesn't save it anywhere */}

        {/* for every bookSearchResponse, for every hit and it's index, give us a
      paragraph that says 1 hit */}
      </Router>
    </div>
  );
}
