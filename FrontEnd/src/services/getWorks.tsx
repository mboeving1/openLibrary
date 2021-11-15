import axios from "axios";
import WorkAPI from "../models/WorkDetails";

export default function getWorksAPI(key: string): Promise<WorkAPI> {
  // const jscmd = details;

  console.log("this is the description console", key);
  return axios
    .get(
      // `https://openlibrary.org/api/books?bibkeys=${bib_key}&&callback=mycallback.json`,
      // `https://openlibrary.org/api/books?bibkeys=${bib_key}&jscmd=details&format=json`,
      "https://openlibrary.org" + key + ".json",
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
      console.log("data from workAPI:", response.data);
      // console.log("this is the description", {description });
      return response.data;
    });
}
