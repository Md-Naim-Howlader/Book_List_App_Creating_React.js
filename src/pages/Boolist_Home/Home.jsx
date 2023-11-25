import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../index.css";
import { getDataFromLocalStorage } from "../../utils/utils";
import Book_List_Form from "../../Components/Book_Form/Book_List_Form";
import BookTable from "../../Components/Book_Table/BookTable";
export const Home = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getDataFromLocalStorage());

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <Book_List_Form setBooks={setBooks} />
        <BookTable books={books} setBooks={setBooks} />
      </div>
    </div>
  );
};

export default Home;
