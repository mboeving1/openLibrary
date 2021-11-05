import axios from "axios";
import BookInfo from "../models/BookDetailPageInterface";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";
import WorkDetails from "../models/WorkDetails";

//searchQuery is being used here bc whatever is being put into getBooks goes into the end of the url
export default function getBooksResponse(
  key: string,
  description: string
): Promise<BookInfo> {
  return axios
    .get(`https://openlibrary.org/works/${key})`, {
      params: {
        key,
        description,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
