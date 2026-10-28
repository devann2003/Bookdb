import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
  name: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
  const navigate = useNavigate();

const handleSignup = () => {
  localStorage.setItem("isLoggedIn", "true");
  navigate("/books");
};

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Sign Up</h2>

       <input type="text" name="name" placeholder="Name"
  value={form.name} onChange={handleChange} />

<input type="text" name="username" placeholder="Username"
  value={form.username} onChange={handleChange} />

<input type="email" name="email" placeholder="Email"
  value={form.email} onChange={handleChange} />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="password-field">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <button type="button" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit" onClick={handleSignup}>Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;