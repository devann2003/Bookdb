import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
  setLoading(true);
  fetch(
    `https://openlibrary.org/search.json?q=subject:fiction&sort=rating&limit=20&page=${page}&fields=key,title,author_name,first_publish_year,cover_i`
  )
    .then((res) => res.json())
    .then((data) => {
      setBooks(data.docs);
      setLoading(false);
    });
}, [page]);

  if (loading) return <p>Loading books...</p>;

  return (
    <div>
         <Navbar />
     <div className="container my-4">
  <h2 className="mb-4">Books</h2>
  <div className="row g-4">
    {books.map((book) => (
      <div className="col-6 col-md-4 col-lg-3" key={book.key}>
        <div className="card book-card h-100">
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="card-img-top book-cover"
            />
          ) : (
            <div className="book-cover no-cover">No cover</div>
          )}
          <div className="card-body">
            <h6 className="card-title">{book.title}</h6>
            <p className="card-text text-muted mb-0">
              {book.author_name?.[0]}
            </p>
            <small className="text-muted">{book.first_publish_year}</small>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      <div className="d-flex justify-content-center align-items-center gap-3 my-4">
  <button
    className="btn btn-outline-dark"
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
  >
    Previous
  </button>
  <span>Page {page}</span>
  <button
    className="btn btn-dark"
    onClick={() => setPage(page + 1)}
  >
    Next
  </button>
</div>
    </div>
  );
}

export default Books;