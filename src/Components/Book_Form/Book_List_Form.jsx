import { useState } from "react";

const Book_List_Form = ({ setBooks }) => {
  // input field states

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  // clear input
  function clearInputs() {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPublishedYear("");
  }
  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // setBooks
    const book = {
      title,
      author,
      isbn,
      publishedYear,
    };
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });

    clearInputs();
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-group">
          <label>Title</label>
          <input
            type="text"
            id="titile"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          ></input>
          <br></br>
          <label>Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
          ></input>
          <br></br>
          <label>ISBN#</label>
          <input
            id="isbn"
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="form-control "
            required
          ></input>
          <br></br>
          <label>Published Year</label>
          <input
            id="publishedYear"
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="form-control "
            required
          ></input>
          <br></br>
          <button type="submit" className="btn btn-success btn-md">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book_List_Form;
