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
// export default function getBooksResponse(
//   key: string,
//   description: string
// ): Promise<BookDetails> {
//   return axios
//     .get(`https://openlibrary.org${key}.json`, {})
//     .then((response) => {
//       console.log("this is the data:", response.data);
//       console.log("this is the description", response.data.description);
//       console.log("logging just description", description);

//       return response.data;
//     });
// }

export default function getBooksResponse(
  isbn?: string[]
): Promise<BookDetailInterface> {
  return axios
    .get("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538", {
      params: {
        isbn, //this the parameter of getBooks() - adds onto the url so that it can retrieve the specific search
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
