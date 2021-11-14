import axios from "axios";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";
import WorkDetails from "../models/WorkDetails";
import { BookISBNInterface, Details, ISBN } from "../models/BookISBNInterface";

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

export default function getBooksResponse(bib_key: string): Promise<ISBN> {
  // const jscmd = details;

  // console.log("this is the description console", ISBN);
  return axios
    .get(
      // `https://openlibrary.org/api/books?bibkeys=${bib_key}&&callback=mycallback.json`,
      // `https://openlibrary.org/api/books?bibkeys=${bib_key}&jscmd=details&format=json`,
      "https://openlibrary.org/api/books?bibkeys=" +
        bib_key +
        "&jscmd=details&format=json",
      {
        params: {
          // jscmd,
          //this the parameter of getBooks() - adds onto the url so that it can retrieve the specific search
        },
      }
    )
    .then((response) => {
      // console.log("this is the getBooksResponse", response.data);
      // var getData = response.data[bib_key];
      // var title = getData.details.title,
      //   author = getData.details.authors[0].name;
      // console.log("this is the description console");
      // console.log("this is the bib key:", { bib_key });
      // console.log(
      //   "these are the details from getBooksResponse:",
      //   getData.details
      // );

      // console.log("this is the description", {description });
      return response.data;
    });
}
