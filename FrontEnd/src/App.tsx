import { stringify } from "querystring";
import React, { useState, useEffect } from "react";
import "./App.css";
import BookList from "./components/BookList";
import BookSearchForm from "./components/BookSearchForm";
import { BookInterface } from "./models/BookDetailsInterface";
import SearchParams from "./models/SearchParams";
import getBooks from "./services/GetBooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./components/BookHit.css";

function App() {
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   fetch("http://openlibrary.org/search.json?author=tolkien")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));

  //   console.log(data);
  // }, []);
  // const [BookSearchForm, setBookSearchForm] = useState<BookInterface>();

  // function onSubmit(searchParams: SearchParams, search: string): void {
  //   getBooks(search).then((type) => {
  //     setBookSearchForm(type);
  //   });
  // }
  return (
    <div className="App">
      <div className="header">
        <div>
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
