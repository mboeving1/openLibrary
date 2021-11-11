import { useState } from "react";
import { BookEntity, BookInterface } from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";
import BookHit from "./BookHit";

export default function BookSearchForm({
  onSubmit,
}: {
  onSubmit: (searchQuery: string) => void;
}) {
  const [bookQuery, setBookQuery] = useState(""); //using useState to set bookQuery as an empty string by default
  // const [searchOptions, setSearchOptions] = useState("");

  return (
    <div className="BookSearchForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(bookQuery); //calls onSubmit(seachQuery) using bookQuery as parameter which by default is an empty string
        }}
      >
        <label>Search</label>
        <input
          type="text"
          value={bookQuery}
          onChange={(e) => {
            //changes from empty string to the target value
            setBookQuery(e.target.value);
          }}
        ></input>
        {/* <label htmlFor="SearchOptions">
          <select
            id="SearchOptions"
            name="SearchOptions"
            onChange={(e) => {
              console.log(e.target.value);
              setSearchOptions(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="title">Title</option>
            <option value="author_name">Author</option>
            <option value="subject">Subject</option>
          </select>
        </label> */}
      </form>
    </div>
  );
}
// {
//   onSubmit,
// }: {
//   onSubmit: (searchParams: SearchParams) => void;
// }) {
//   const [title, setTitle] = useState("");
//   const [type, setType] = useState("");
//   const [query, setQuery] = useState("");

//   <div className="BookSearchForm">
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSubmit({ title, type, query });
//       }}
//     >
//       <label className="label">Search by Title: </label>
//       <input
//         className="input"
//         type="text"
//         value={title}
//         onChange={(e) => {
//           setTitle(e.target.value);
//         }}
//       />
//       <div className="label">
//         <label className="label" htmlFor="type" /> Type:
//         <select
//           id="select"
//           name="type"
//           onChange={(e) => {
//             console.log(e.target.value);
//             setType(e.target.value);
//           }}
//         >
//           <option value="" defaultChecked>
//             optional
//           </option>
//           <option value="balanced">balanced</option>
//           <option value="high-fiber">high-fiber</option>
//           <option value="high-protein">high-protein</option>
//           <option value="low-carb">low-carb</option>
//           <option value="low-fat">low-fat</option>
//           <option value="low-protein">low-protein</option>
//           <option value="low-sodium">low-sodium</option>
//         </select>
//       </div>

//       <div className="searchButton">
//         <button type="submit" className="searchButton">
//           Search
//         </button>
//       </div>
//     </form>
//   </div>;
