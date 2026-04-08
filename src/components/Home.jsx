import BookList from "./BookList";

export default function Home() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="/images/TOR_revan.png"
            class="d-block mx-lg-auto img-fluid"
            style={{ width: 250, height: 400, borderRadius: "0.5rem" }}
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            The Old Republic: Revan
          </h1>
          <p class="lead" style={{ textAlign: "justify" }}>
            The Old Republic: Revan is the third in a series of novels based on
            the MMORPG Star Wars: The Old Republic, and features the character
            Revan, who was the player character in the 2003 video game Star
            Wars: Knights of the Old Republic. Written by Drew Karpyshyn, the
            novel was released on November 15, 2011.{" "}
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Buy the Book
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Rent the Book
            </button>
          </div>
        </div>
        <BookList />
      </div>
    </div>
  );
}
