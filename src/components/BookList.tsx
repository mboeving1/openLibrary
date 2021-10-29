import getBooks from "../services/GetBooks";
import BookSearchForm from "./BookSearchForm";

export default function BookList() {
  function onSubmit(searchQuery: string): void {
    getBooks(searchQuery);
  }
  return (
    <div>
      <h1>Recipe List</h1>
      {/* <button
        onClick={() => {
          getBooks();
        }}
      >
        Get axios Response
      </button> */}

      <BookSearchForm onSubmit={onSubmit} />
    </div>
  );
}
