import axios from "axios";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";

//searchQuery is being used here bc whatever is being put into getBooks goes into the end of the url
export default function getBooks(
  searchQuery: string
): Promise<BookDetailInterface> {
  return axios
    .get("http://openlibrary.org/search.json?", {
      params: {
        q: searchQuery, //this the parameter of getBooks() - adds onto the url so that it can retrieve the specific search
      },
    })
    .then((response) => {
      console.log(response.data.docs[1].isbn);
      return response.data;
      let targetISBN = response.data.docs[1].isbn;
    });
}
