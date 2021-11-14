import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
  BookISBNInterface,
  Details,
  ISBN,
  AuthorsEntity,
} from "../models/BookISBNInterface";
import { Favorites } from "../context/FavoritesProvider";
import getBooksResponse from "../services/getBooksResponse";
import { useContext } from "react";
import { DocsEntity } from "../models/BookDetailsInterface";
import BookHit from "./BookHit";
import axios from "axios";
import getBooks from "../services/GetBooks";

export default function BookDescriptions() {
  //   {
  //   info_url,
  //   preview,
  //   preview_url,
  //   thumbnail_url,
  //   covers,
  //   title,
  //   authors,
  //   description,
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
  // const { bib_key, description, covers, authors, title, ISBN } =
  //   useParams<any>();

  // const { addToFavorites, removeFromFavorites, favoritesList } =
  //   useContext(Favorites);

  // const thisBookIsAFavorite: boolean = favoritesList.some(
  //   (favorite) => favorite.ISBN.bib_key == details?.ISBN.bib_key
  // );

  const [descriptions, setDescriptions] = useState<Details>();

  // useEffect(() => {
  //   //here is where we are gonna get the stuff - call the function .then
  //   getBooksResponse(targetISBN, details).then(
  //     (response) => setDetail(response)
  //     // setDescriptions(response.ISBN.description)
  //   );
  // }, []);

  const [test, setTest] = useState<any>();

  const fetchedDetails = useEffect(() => {
    getBooksResponse(targetISBN).then((data) => {
      setTest(data);
      setDescriptions(data.details);
    });
  }, []);
  const getData = targetISBN[0].details;

  return (
    <div className="detailsPage">
      <button
        onClick={() => {
          console.log(test);
          console.log(targetISBN);
          console.log(test && test[targetISBN]);
        }}
      >
        {" "}
        test{" "}
      </button>
      {/* <h1>{getData?.authors}</h1> */}
      <h1>{test[targetISBN]}</h1>
      {/* <h1>{test!.details[3]}</h1> */}
      {/* <h2> {targetISBN}</h2> */}
      <img
      // src={`https://covers.openlibrary.org/b/id/ ${details?.covers} -L.jpg`}
      />
      <p>{/* source: <a href={id}></a> */}</p>
      {/* {console.log("details are: ", getData)} */}
      <p>ISBN: {targetISBN}</p>
      {/* <h1>{props.description}</h1> */}
      {/* <ul>
        {details?.recipe.ingredientLines?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> */}
      {/* {details?.description} */}
      {/* {thisBookIsAFavorite ? (
        <button
          className="detailsPageRemoveButton"
          onClick={() => {
            removeFromFavorites(details?.!);
          }}
        >
          Remove Favorite
        </button>
      ) : (
        <button
          className="detailsPageFavoritesButton"
          onClick={() => {
            console.log(details);
            if (details) {
              // addToFavorites(details);
            }
          }}
        >
          Add to Favorites
        </button>
      )} */}
    </div>
  );
}
