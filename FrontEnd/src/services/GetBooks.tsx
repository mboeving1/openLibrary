import axios from "axios";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";

//searchQuery is being used here bc whatever is being put into getBooks goes into the end of the url
export default function getBooks(
  searchQuery: string
  // id_amazon: string
): Promise<BookDetailInterface> {
  return axios
    .get("https://openlibrary.org/search.json?", {
      params: {
        q: searchQuery, //this the parameter of getBooks() - adds onto the url so that it can retrieve the specific search
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
