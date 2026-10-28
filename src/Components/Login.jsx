import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

const handleLogin = () => {
  localStorage.setItem("isLoggedIn", "true");
  navigate("/books");
};

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
            
          </button>
        </div>

        <button type="submit" onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Create account</Link>
        </p>

        <p>
          Are you an admin? <Link to="/admin">Click here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;