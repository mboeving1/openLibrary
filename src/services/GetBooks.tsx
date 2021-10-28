import axios from "axios";
import { DocsEntity } from "../models/BookDetailsInterface";

export default function getBooks(search: string): Promise<DocsEntity> {
  return axios
    .get(`http://openlibrary.org`, {
      params: {
        query: search,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
