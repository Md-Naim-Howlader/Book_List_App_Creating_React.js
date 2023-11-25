import BookRow from "../Book_List_Row/BookRow";

const BookTable = ({ books, setBooks }) => {
  // delete book from LS
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter((book) => book.isbn !== id);
    setBooks(filteredBooks);
  };

  return (
    <div className="view-container">
      {books.length > 0 && (
        <>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>ISBN#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => {
                  return (
                    <>
                      <BookRow
                        onRemoveBook={handleRemoveBook}
                        key={book.name}
                        book={book}
                      />
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="btn btn-success btn-md mb-3">Update</button>
          <button
            onClick={() => setBooks([])}
            className="btn btn-danger btn-md"
          >
            Remove All
          </button>
        </>
      )}
      {books.length < 1 && (
        <div>
          <h3>No Books are added yet!</h3>
        </div>
      )}
    </div>
  );
};

export default BookTable;
