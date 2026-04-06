import { useState } from "react";
import books from "../utils/books";

export default function BookList() {
  const [bookList, setBookList] = useState(books);

  const [showForm, setShowForm] = useState(false);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author) return;
    setBookList([...bookList, { ...newBook, id: bookList.length + 1 }]);
    setNewBook({ title: "", author: "", year: "", description: "", image: "" });
    setShowForm(false);
  };

  return (
    <>
      <section className="py-5 text-center container" id="books">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-semibold mb-4">The Old Republic Era Series</h1>
            <p
              className="lead text-body-secondary"
              style={{ textAlign: "justify" }}
            >
              Dive into the ancient history of the Star Wars galaxy, thousands
              of years before the rise of the Empire. The Old Republic Era
              series explores the golden age of the Jedi, the fall of legendary
              warriors, and the eternal struggle between the light and dark
              sides of the Force.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {bookList.map((book) => (
              <div className="col" key={book.id}>
                <div
                  className="card shadow-sm h-100"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={
                      book.image || "https://placehold.co/400x300?text=No+Image"
                    }
                    alt={book.title}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "300px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted mb-1">
                      <small>
                        {book.author} — {book.year}
                      </small>
                    </p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancel" : "+ Add Book"}
            </button>

            {showForm && (
              <div className="card p-4 text-start mt-4">
                <h5 className="mb-3">Add New Book</h5>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    value={newBook.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Author"
                    name="author"
                    value={newBook.author}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Year"
                    name="year"
                    value={newBook.year}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={newBook.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Image URL (optional)"
                    name="image"
                    value={newBook.image}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-success" onClick={handleAddBook}>
                  Save Book
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
