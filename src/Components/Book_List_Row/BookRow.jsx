import { MdDelete } from "react-icons/md";

const BookRow = ({ book, onRemoveBook }) => {
  const { isbn, author, title, publishedYear } = book;
  const deleteBook = (id) => {
    onRemoveBook(id);
  };
  return (
    <tr>
      <td>{isbn}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{publishedYear}</td>
      <td className="delete-btn">
        <MdDelete onClick={() => deleteBook(isbn)} color="red" />
      </td>
    </tr>
  );
};

export default BookRow;
