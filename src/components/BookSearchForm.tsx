import { useState } from "react";
import { BookInterface } from "../models/BookDetailsInterface";
import SearchParams from "../models/SearchParams";

export default function BookSearchForm({
  onSubmit,
}: {
  onSubmit: (searchParams: SearchParams) => void;
}) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

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
}
