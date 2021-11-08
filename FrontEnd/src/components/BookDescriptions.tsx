import { useParams } from "react-router";
import { useState, useEffect } from "react";
import BookInfo from "../models/BookInfoInterface";
import { Favorites } from "../context/FavoritesProvider";
import getBooksResponse from "../services/getBooksResponse";
import { useContext } from "react";
import getBooks from "../services/GetBooks";

export default function BookDescriptions() {
  return (
    <div>
      <h1>this is the description page</h1>
    </div>
  );
}
