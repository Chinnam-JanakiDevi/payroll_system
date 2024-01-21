import React, { useState } from "react";
import "./Register.css"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setRegistering] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log(`Email: ${email}, Password: ${password}, Mode: ${isRegistering ? 'Register' : 'Login'}`);
  };

  return (
    <div className="auth-container">
      <h2 align="center">{isRegistering ? "Register" : "Login"}</h2>
      <form className="auth-form" onSubmit={handleFormSubmit}>
        <label className="auth-label">
          Email:
          <input
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="auth-label">
          Password:
          <input
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="auth-button" type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <p className="auth-toggle" onClick={() => setRegistering(!isRegistering)}>
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </p>
    </div>
  );
};

export default Register;
