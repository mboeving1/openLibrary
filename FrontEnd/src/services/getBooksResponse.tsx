import axios from "axios";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";
import WorkDetails from "../models/WorkDetails";
import BookInfo from "../models/BookInfoInterface";
import { BookDetails } from "../models/BookInfoInterface";

//searchQuery is being used here bc whatever is being put into getBooks goes into the end of the url
export default function getBooksResponse(
  bookKey: string
): Promise<BookDetails> {
  return axios
    .get(`https://openlibrary.org/${bookKey})`, {
      params: {},
    })
    .then((response) => {
      console.log(response.data);
      console.log(bookKey);
      return response.data;
    });
}
