import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { BookISBNInterface, Details, ISBN } from "../models/BookISBNInterface";
import { Favorites } from "../context/FavoritesProvider";
import getBooksResponse from "../services/getBooksResponse";
import { useContext } from "react";
import { DocsEntity } from "../models/BookDetailsInterface";
import BookHit from "./BookHit";
import axios from "axios";

export default function BookDescriptions() {
  {
    //   return <h1> details page</h1>;
    // }

    const [details, setDetails] = useState<BookISBNInterface>();

    // const id = `https://openlibrary.org${key}`;

    // const fetchedDetails = useEffect(() => {
    //   getBooksResponse(targetISBN).then((data) => setDetails(data));
    // }, []);
    const { targetISBN } = useParams<any>();

    const { addToFavorites, removeFromFavorites, favoritesList } =
      useContext(Favorites);

    const thisBookIsAFavorite: boolean = favoritesList.some(
      (favorite) => favorite.ISBN.bib_key == details?.ISBN.bib_key
    );

    const [descriptions, setDescriptions] = useState<BookISBNInterface>();

    useEffect(() => {
      //here is where we are gonna get the stuff - call the function .then
      getBooksResponse(targetISBN).then((response) =>
        console.log("getting bookISBN", response)
      );
    }, []);
    return (
      <div className="detailsPage">
        <h1>{descriptions}</h1>
        {/* <h2> {targetISBN}</h2> */}
        <img
        // src={`https://covers.openlibrary.org/b/id/ ${details?.covers} -L.jpg`}
        />
        <p>{/* source: <a href={id}></a> */}</p>
        {console.log("details are: ", details)}
        <p>Description: {targetISBN}</p>
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
}
