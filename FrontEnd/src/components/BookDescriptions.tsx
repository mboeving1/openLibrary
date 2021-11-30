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
import "./ReviewList.css";

import { render } from "@testing-library/react";
import { Link, NavLink } from "react-router-dom";
import reviewInterface from "../models/reviewInterface";
import { addReview, fetchAllReviews } from "../services/bookReviewAPIservice";
import ReviewList from "./ReviewList";
import { CreatedOrLastModified } from "../models/WorkDetails";

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
      console.log("this is test", test);
      setDescriptions(data.details);
    });
    getBooks(bookKey).then((data) => {
      setShopping(data);
      // console.log("this is amazon id", id_amazon);
      // console.log("this is amazon info:", id_amazon[0]);
    });
  }, []);

  const [stuff, setStuff] = useState<WorkAPI>();
  // const [otherStuff, setOtherStuff] = useState<CreatedOrLastModified>();

  const moreDetails = useEffect(() => {
    getWorksAPI(bookKey).then((data) => {
      console.log("%cworkAPI data", "background-color: red", data.description);
      console.log("this is bookKey", bookKey);
      setStuff(data);
    });
  }, []);

  const getData = targetISBN[0].details;

  const [active, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(true);
  };

  const [_id, setId] = useState<any>();
  const [username, setUsername] = useState<any>();
  const [review, setReview] = useState<any>();
  const [isbn, setIsbn] = useState<string>(targetISBN);

  const [allReviews, setAllReviews] = useState<reviewInterface[]>([]);

  useEffect(() => {
    fetchAllReviews().then((res) => setAllReviews(res));
  }, []);

  return (
    <div className="detailsPage">
      {/* <button
        onClick={() => {
          console.log(test);
          console.log("this is the targetISBN", targetISBN);
          console.log(test && test[targetISBN]);
          console.log("this is stuff", stuff);
          console.log(shopping);
        }}
      >
        {" "}
        test{" "}
      </button> */}
      <div className="descriptionTitle">
        {test && test[targetISBN]?.details?.title && (
          <h1>{test[targetISBN].details.title}</h1>
        )}
        {/* <h1>{test && test[targetISBN].details.title}</h1> */}

        {/* {stuff && <p>{stuff.authors![0].author}</p>}{" "} */}
      </div>
      <div className="authorDiv">
        {/* {test && test[targetISBN]?.details?.authors[0].name && (
          <h2>{test[targetISBN].details.author[0].name}</h2>
        )} */}
        {test && test[targetISBN]?.details?.authors[0].name}
        {/* <h2> {test && test[targetISBN]?.details?.authors[0].name} </h2> */}
      </div>
      <div className="bigContainer">
        <div className="coverDiv">
          <img
            className="coverImg"
            src={`https://covers.openlibrary.org/b/id/${
              test && test[targetISBN].details.covers[0]
            }-L.jpg`}
          ></img>
        </div>
        {/* <h2>{test && test[targetISBN].details.authors[0].name}</h2> */}
        <div className="floatContainer">
          <div className="descriptionParagraph">
            {/* {stuff && stuff.description} */}
            {stuff?.description && typeof stuff?.description == "object" && (
              <p>{stuff.description.value}</p>
            )}
            {stuff?.description && typeof stuff?.description == "string" && (
              <p>{stuff.description}</p>
            )}
          </div>

          {/* <h1>{amazon}</h1> */}
          {/* <h2>{shopping?.docs.id_amazon}</h2> */}
          <img
          // src={`https://covers.openlibrary.org/b/id/ ${details?.covers} -L.jpg`}
          />
          {/* <p>ISBN: {targetISBN}</p> */}
          <Link
            to={{
              pathname: `https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Book/dp/${amazon}/ref=sr_1_2?keywords=${amazon}&qid=1637111936&qsid=146-0603343-4241928&sr=8-2&sres=${amazon}&srpt=ABIS_BOOK`,
            }}
            target="_blank"
          >
            {/* <h1>this is the amazon link</h1> */}
            <button className="amazonButton"></button>
          </Link>

          <button className="reviewButton" onClick={ToggleClass}>
            Leave a Review!
          </button>
        </div>
      </div>
      <div className={active ? "true" : "false"}>
        <form
          className="reviewForm"
          style={{ backgroundColor: "burlywood" }}
          onSubmit={(e) => {
            e.preventDefault();
            setIsbn(targetISBN);
            let newReview: reviewInterface = { _id, username, review, isbn };
            console.log("new isbn", targetISBN);
            addReview(newReview).then((res) => allReviews.push(res));

            fetchAllReviews().then((res) => setAllReviews(res));
          }}
        >
          <h3>Share Your Thoughts </h3>
          <label style={{ marginBottom: "1em" }}>Name:</label>
          <input
            type="text"
            style={{ width: "15vw", backgroundColor: "ivory" }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <br />
          <label className="reviewTag" style={{ marginTop: "1em" }}>
            <pre> Review: </pre>
          </label>

          <textarea
            style={{
              width: "30vw",
              height: "30vh",
              marginTop: "1em",
              backgroundColor: "ivory",
            }}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              marginBottom: "1em",
              marginTop: "1em",
              backgroundColor: "#F0EAD6",
            }}
          >
            submit
          </button>
        </form>
      </div>
      <div className="reviewsOnPage">
        {allReviews.map((thought, index) => {
          if (thought.isbn == targetISBN) {
            return <ReviewList reviews={thought} />;
          }
        })}
      </div>

      {/* <ReviewList reviews={newReview} /> */}

      {/* <ReviewList /> */}

      {/* <button onClick={() => {
        <a = {`https://www.amazon.com/s?k=${amazon}&ref=nb_sb_noss`}
      }} */}
    </div>
  );
}
