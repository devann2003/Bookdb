import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Admin Login</h2>

        <input type="text" placeholder="Admin Name" />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit">Login</button>

        <p>
          <Link to="/admin/forgot-password">Forgot password?</Link>
        </p>

        <p>
          Not an admin? <Link to="/login">Back to user login</Link>
        </p>
      </div>
    </div>
  );
}

export default Admin;