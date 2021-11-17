import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
  BookISBNInterface,
  Details,
  ISBN,
  AuthorsEntity,
  Identifiers,
} from "../models/BookISBNInterface";
import { Favorites } from "../context/FavoritesProvider";
import getBooksResponse from "../services/getBooksResponse";
import { useContext } from "react";
import {
  BookDetailInterface,
  DocsEntity,
} from "../models/BookDetailsInterface";
import BookHit from "./BookHit";
import axios from "axios";
import getBooks from "../services/GetBooks";
import getWorksAPI from "../services/getWorks";
import WorkAPI from "../models/WorkDetails";
import "./BookDescriptions.css";
import { render } from "@testing-library/react";
import { Link, NavLink } from "react-router-dom";

export default function BookDescriptions() {
  //   {
  //   info_url,
  //   preview,
  //   preview_url,
  //   thumbnail_url,
  //   covers,
  //   title,
  //   authors,
  // description,
  //   details,
  //   bib_key,
  // }: {
  //   bib_key: string;
  //   info_url: string;
  //   preview: string;
  //   preview_url: string;
  //   thumbnail_url: string;
  //   details: Details;
  //   description: string;
  //   authors?: AuthorsEntity[] | null;
  //   covers?: number[] | null;
  //   title: string;
  //     }
  //   return <h1> details page</h1>;
  // }

  // const [detail, setDetail] = useState<BookISBNInterface>();

  // const id = `https://openlibrary.org${key}`;

  // const fetchedDetails = useEffect(() => {
  //   getBooksResponse(targetISBN).then((data) => setDetails(data));
  // }, []);
  const { targetISBN } = useParams<any>();

  let { bookKey } = useParams<any>();
  bookKey = "/works/" + bookKey;

  const { amazon } = useParams<any>();

  // const { bib_key, description, covers, authors, title, ISBN } =
  //   useParams<any>();

  const [descriptions, setDescriptions] = useState<Details>();

  // useEffect(() => {
  //   //here is where we are gonna get the stuff - call the function .then
  //   getBooksResponse(targetISBN, details).then(
  //     (response) => setDetail(response)
  //     // setDescriptions(response.ISBN.description)
  //   );
  // }, []);

  const [test, setTest] = useState<any>();
  const [shopping, setShopping] = useState<BookDetailInterface>();

  const fetchedDetails = useEffect(() => {
    getBooksResponse(targetISBN).then((data) => {
      setTest(data);
      setDescriptions(data.details);
    });
    getBooks(bookKey).then((data) => {
      setShopping(data);
      // console.log("this is amazon id", id_amazon);
      // console.log("this is amazon info:", id_amazon[0]);
    });
  }, []);

  const [description, setDescription] = useState<any>();

  const [stuff, setStuff] = useState<WorkAPI>();

  const moreDetails = useEffect(() => {
    getWorksAPI(bookKey).then((data) => {
      console.log("workAPI data", data.description);
      console.log("this is bookKey", bookKey);
      setStuff(data);
    });
  }, []);

  const getData = targetISBN[0].details;

  const [active, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(true);
  };

  return (
    <div className="detailsPage">
      <button
        onClick={() => {
          console.log(test);
          console.log("this is the targetISBN", targetISBN);
          console.log(test && test[targetISBN]);
          console.log("this is stuff", stuff);
        }}
      >
        {" "}
        test{" "}
      </button>
      <h1>{test && test[targetISBN].details.title}</h1>
      <img src="https://covers.openlibrary.org/b/id/8483863-L.jpg"></img>
      {/* <h2>{test && test[targetISBN].details.authors[0].name}</h2> */}
      <div className="descriptionParagraph">
        {stuff && <p>{stuff.description}</p>}
      </div>
      <h1>{amazon}</h1>
      {/* <h2>{shopping?.docs.id_amazon}</h2> */}
      <img
      // src={`https://covers.openlibrary.org/b/id/ ${details?.covers} -L.jpg`}
      />
      {/* <p>ISBN: {targetISBN}</p> */}
      <button onClick={ToggleClass}>Leave a Review!</button>
      <div className={active ? "true" : "false"}>
        <form className="reviewForm">
          <h3>Leave a Review </h3>
          <label>Name:</label>
          <input type="text"></input>
          <br />
          <textarea></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
      );
      <Link
        to={{
          pathname: `https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Book/dp/${amazon}/ref=sr_1_2?keywords=${amazon}&qid=1637111936&qsid=146-0603343-4241928&sr=8-2&sres=${amazon}&srpt=ABIS_BOOK`,
        }}
        target="_blank"
      >
        <h1>this is the amazon link</h1>
      </Link>
      {/* <button onClick={() => {
        <a = {`https://www.amazon.com/s?k=${amazon}&ref=nb_sb_noss`}
      }} */}
    </div>
  );
}
