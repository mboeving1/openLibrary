import getBooks from "../services/GetBooks";

export default function BookList() {
  return (
    <div>
      <h1>Recipe List</h1>
      <button
        onClick={() => {
          getBooks();
        }}
      >
        Get axios Response
      </button>
    </div>
  );
}
