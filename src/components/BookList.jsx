export default function BookList() {
  return (
    <>
      <section class="py-5 text-center container" id="books">
        <div class="row py-lg-5">
          <div class="col-lg-8 col-md-8 mx-auto">
            <h1 class="fw-semibold mb-4">The Old Republic Era Series</h1>
            <p
              class="lead text-body-secondary"
              style={{ textAlign: "justify" }}
            >
              Dive into the ancient history of the Star Wars galaxy, thousands
              of years before the rise of the Empire. The Old Republic Era
              series explores the golden age of the Jedi, the fall of legendary
              warriors, and the eternal struggle between the light and dark
              sides of the Force. From the tragic story of Revan to the birth of
              the Sith Empire, these novels bring to life an era of epic
              battles, complex heroes, and timeless conflict.
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2 me-4">
                Explore the series
              </a>
              <a href="#" class="btn btn-secondary my-2">
                Browse all books
              </a>
            </p>
          </div>
        </div>
      </section>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="/images/path_of_destruction.png"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="/images/rule_of_two.png"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="/images/dynasty_of_evil.webp"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="/images/annihilation_cover.png"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="/images/swtor_deceived_cover.png"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="/images/TOR_revan.png"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
