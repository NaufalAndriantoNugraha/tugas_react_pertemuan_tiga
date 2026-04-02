import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
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
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1">Welcome Back</h3>
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              Please login to your account
            </p>
          </div>
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
            placeholder="Enter your password"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label text-muted" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-primary text-decoration-none"
            style={{ fontSize: "0.85rem" }}
          >
            Forgot password?
          </a>
        </div>
        <button className="btn btn-primary btn-lg w-100 mb-3">Login</button>
        <p className="text-center text-muted" style={{ fontSize: "0.85rem" }}>
          By logging in, you agree to our terms
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
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary text-decoration-none fw-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
