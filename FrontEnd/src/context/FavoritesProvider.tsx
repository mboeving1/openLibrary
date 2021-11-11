import React, { ReactNode, useState } from "react";
import FavoritesList from "../components/FavoritesList";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import { BookISBNInterface } from "../models/BookISBNInterface";

interface FavoritesProps {
  addToFavorites: (book: BookISBNInterface) => void;
  removeFromFavorites: (key: string) => void;
  favoritesList: BookISBNInterface[];
}

const defaultValues: FavoritesProps = {
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  favoritesList: [],
};

export const Favorites = React.createContext<FavoritesProps>(defaultValues);

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoritesList, setFavoritesList] = useState<BookISBNInterface[]>([]);
  function addToFavorites(book: BookISBNInterface): void {
    console.log("this is the book", book);
    //copy then modify
    let newFavoritesList = [...favoritesList];
    newFavoritesList.push(book);
    setFavoritesList(newFavoritesList);
    console.log("this is the favorites list:", favoritesList);
  }

  function removeFromFavorites(key: string): void {
    //copy then modify
    let newFavoritesList = [...favoritesList];
    let foundIndex = newFavoritesList.findIndex(
      (book) => book.ISBN.bib_key == key
    );
    newFavoritesList.splice(foundIndex, 1);
    setFavoritesList(newFavoritesList);
  }

  return (
    <Favorites.Provider
      value={{ addToFavorites, removeFromFavorites, favoritesList }}
    >
      {children}
    </Favorites.Provider>
  );
}
