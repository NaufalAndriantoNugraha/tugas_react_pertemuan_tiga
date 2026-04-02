import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      className="d-flex justify-content-center align-items-center mb-4"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="card shadow-sm border p-4"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "1rem",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1">Create Account</h3>
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              Sign up to get started
            </p>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-muted">Full Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-muted">Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-muted">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Create a password"
          />
        </div>
        <div className="mb-4">
          <label className="form-label text-muted">Confirm Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Confirm your password"
          />
        </div>
        <button className="btn btn-primary btn-lg w-100 mb-3">Sign Up</button>
        <p className="text-center text-muted" style={{ fontSize: "0.85rem" }}>
          By signing up, you agree to our terms
        </p>
        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted" style={{ fontSize: "0.8rem" }}>
            OR
          </span>
          <hr className="flex-grow-1" />
        </div>
        <button className="btn btn-outline-dark btn-lg w-100 d-flex align-items-center justify-content-center gap-2">
          <i className="fa-brands fa-google"></i>
          Continue with Google
        </button>
        <p
          className="text-center text-muted mt-4 mb-0"
          style={{ fontSize: "0.9rem" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary text-decoration-none fw-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
