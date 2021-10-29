import axios from "axios";
import { DocsEntity } from "../models/BookDetailsInterface";

export default function getBooks(): Promise<DocsEntity> {
  return axios
    .get("http://openlibrary.org/search.json?", {
      params: {
        q: "the+lord+of+the+rings",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

// http://openlibrary.org/search.json?q=the+lord+of+the+rings
