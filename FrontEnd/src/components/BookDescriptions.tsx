import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { BookISBNInterface } from "../models/BookISBNInterface";
import { Favorites } from "../context/FavoritesProvider";
import getBooksResponse from "../services/getBooksResponse";
import { useContext } from "react";
import { DocsEntity } from "../models/BookDetailsInterface";
import BookHit from "./BookHit";

export default function BookDescriptions({ targetISBN }: any) {
  //   return <h1> details page</h1>;
  // }
  const [details, setDetails] = useState<BookISBNInterface>();

  // const id = `https://openlibrary.org${key}`;

  const fetchedDetails = useEffect(() => {
    getBooksResponse(targetISBN).then((data) => setDetails(data));
  }, []);

  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);

  const thisBookIsAFavorite: boolean = favoritesList.some(
    (favorite) => favorite.ISBN.bib_key == details?.ISBN.bib_key
  );
  return (
    <div className="detailsPage">
      <h1>{details?.description}</h1>
      <img
      // src={`https://covers.openlibrary.org/b/id/ ${details?.covers} -L.jpg`}
      />
      <p>{/* source: <a href={id}></a> */}</p>
      {console.log("details are: ", details)}
      <p>Description</p>
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
