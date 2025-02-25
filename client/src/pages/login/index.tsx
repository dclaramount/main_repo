import React, { useState, FormEvent } from "react";
import "./LoginPage.css"; // Import CSS file

// Define the component
const LoginPage: React.FC = () => {
  // State for username and password
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // State for error messages or success
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault(); // Prevent page reload

    // Basic validation logic
    if (username === "" || password === "") {
      setError("Both fields are required!");
      setSuccess("");
    } else if (username === "admin" && password === "password") {
      setSuccess("Login successful!");
      setError("");
    } else {
      setError("Invalid username or password.");
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Username Input */}
        <div className="inputGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="input"
          />
        </div>

        {/* Password Input */}
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="button">
          Login
        </button>
      </form>

      {/* Error or Success Messages */}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default LoginPage;
