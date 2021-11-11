import { useParams } from "react-router";
import { useState, useEffect } from "react";
import BookInfo, { BookDetails } from "../models/BookInfoInterface";
import { Favorites } from "../context/FavoritesProvider";
import getBooksResponse from "../services/getBooksResponse";
import { useContext } from "react";

export default function BookDescriptions({ key, description }: any) {
  //   return <h1> details page</h1>;
  // }
  const [details, setDetails] = useState<BookDetails>();

  const id = `https://openlibrary.org${key}`;

  const fetchedDetails = useEffect(() => {
    getBooksResponse(key, description).then((data) => setDetails(data));
  }, []);

  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);

  const thisBookIsAFavorite: boolean = favoritesList.some(
    (favorite) => favorite.key == details?.key
  );
  return (
    <div className="detailsPage">
      <h1>{details?.title}</h1>
      <img
        src={`https://covers.openlibrary.org/b/id/ ${details?.covers} -L.jpg`}
      />
      <p>
        source: <a href={id}></a>
      </p>
      {console.log("details are: ", details)}
      <p>Ingredients</p>
      {/* <ul>
        {details?.recipe.ingredientLines?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul> */}
      {details?.description}
      {thisBookIsAFavorite ? (
        <button
          className="detailsPageRemoveButton"
          onClick={() => {
            removeFromFavorites(details?.key!);
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
              addToFavorites(details);
            }
          }}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
}
