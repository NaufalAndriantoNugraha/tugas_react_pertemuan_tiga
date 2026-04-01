export default function App() {
  return (
    <>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-5 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            class="d-inline-flex link-body-emphasis text-decoration-none align-items-center gap-2"
          >
            <i
              class="fa-solid fa-book-open fa-xl"
              style={{ color: "#0d6efd" }}
            ></i>
            <span className="fw-semibold fs-5" style={{ color: "#0d6efd" }}>
              Digital Library
            </span>
          </a>
        </div>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" class="nav-link px-2">
              Home
            </a>
          </li>
          <li>
            <a href="#books" class="nav-link px-2">
              Books
            </a>
          </li>
          <li>
            <a href="#teams" class="nav-link px-2">
              Teams
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link px-2">
              Contact
            </a>
          </li>
        </ul>
        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" class="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://static.wikia.nocookie.net/starwars/images/6/63/TOR-Revan.jpg/revision/latest?cb=20110728211622"
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
              The Old Republic: Revan is the third in a series of novels based
              on the MMORPG Star Wars: The Old Republic, and features the
              character Revan, who was the player character in the 2003 video
              game Star Wars: Knights of the Old Republic. Written by Drew
              Karpyshyn, the novel was released on November 15, 2011.{" "}
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Buy the Book
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Rent the Book
              </button>
            </div>
          </div>
        </div>
      </div>
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
                  src="https://static.wikia.nocookie.net/starwars/images/9/9b/Path-of-destruction.jpg/revision/latest?cb=20070719033113"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="https://static.wikia.nocookie.net/starwars/images/1/13/RuleofTwo.jpg/revision/latest?cb=20081021130617"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="https://static.wikia.nocookie.net/starwars/images/1/1c/Dynasty_of_Evil.jpg/revision/latest?cb=20090418194005"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="https://static.wikia.nocookie.net/starwars/images/a/a3/AnnihilationCover.jpg/revision/latest?cb=20120601025557"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="https://static.wikia.nocookie.net/starwars/images/c/cd/Swtor_deceived_cover.jpg/revision/latest?cb=20100715022755"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  src="https://static.wikia.nocookie.net/starwars/images/6/63/TOR-Revan.jpg/revision/latest?cb=20110728211622"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="teams" class="py-5 container">
        <h1 class="fw-semibold text-center mb-2">Our Team</h1>
        <p class="text-center text-body-secondary mb-5">
          The people behind Digital Library
        </p>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div class="col">
            <div class="card shadow-sm border-0 text-center p-4">
              <div class="mb-3">
                <i class="fa-solid fa-circle-user fa-3x text-primary"></i>
              </div>
              <h5 class="fw-semibold mb-1">John Carter</h5>
              <p class="text-body-secondary mb-0">Founder & CEO</p>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm border-0 text-center p-4">
              <div class="mb-3">
                <i class="fa-solid fa-circle-user fa-3x text-primary"></i>
              </div>
              <h5 class="fw-semibold mb-1">Sarah Yu</h5>
              <p class="text-body-secondary mb-0">Head of Curation</p>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm border-0 text-center p-4">
              <div class="mb-3">
                <i class="fa-solid fa-circle-user fa-3x text-primary"></i>
              </div>
              <h5 class="fw-semibold mb-1">Marcus Ren</h5>
              <p class="text-body-secondary mb-0">Lead Developer</p>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm border-0 text-center p-4">
              <div class="mb-3">
                <i class="fa-solid fa-circle-user fa-3x text-primary"></i>
              </div>
              <h5 class="fw-semibold mb-1">Lena Voss</h5>
              <p class="text-body-secondary mb-0">UI/UX Designer</p>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm border-0 text-center p-4">
              <div class="mb-3">
                <i class="fa-solid fa-circle-user fa-3x text-primary"></i>
              </div>
              <h5 class="fw-semibold mb-1">David Ordo</h5>
              <p class="text-body-secondary mb-0">Content Manager</p>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm border-0 text-center p-4">
              <div class="mb-3">
                <i class="fa-solid fa-circle-user fa-3x text-primary"></i>
              </div>
              <h5 class="fw-semibold mb-1">Aria Solus</h5>
              <p class="text-body-secondary mb-0">Community Manager</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="py-5 bg-body-tertiary">
        <div class="container">
          <h1 class="fw-semibold text-center mb-2">Contact Us</h1>
          <p class="text-center text-body-secondary mb-5">
            Have a question? We'd love to hear from you.
          </p>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your name"
                />
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="your@email.com"
                />
              </div>
              <div class="mb-4">
                <label class="form-label fw-semibold">Message</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div class="d-grid">
                <button type="button" class="btn btn-primary btn-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-4 border-top">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
          <div class="col-md-4 d-flex align-items-center gap-2">
            <i
              class="fa-solid fa-book-open fa-lg"
              style={{ color: "#0d6efd" }}
            ></i>
            <span class="fw-semibold" style={{ color: "#0d6efd" }}>
              Digital Library
            </span>
          </div>
          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#books" class="nav-link px-2 text-body-secondary">
                Books
              </a>
            </li>
            <li class="nav-item">
              <a href="#teams" class="nav-link px-2 text-body-secondary">
                Teams
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p
            class="text-body-secondary mt-3 mb-0 w-100 text-center"
            style={{ fontSize: "0.85rem" }}
          >
            © 2025 Digital Library. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
