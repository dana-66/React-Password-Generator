import { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        maxLength: 12,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,

      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <>
      <div>
        <pre>
          <h2>Checking Password Strength </h2>
          <span style={{ fontSize: "20px" }}>Enter Password: </span>
          <input
            type="password"
            style={{
              marginBottom: "10px",
              padding: "5px 15px",
              fontSize: "20px",
            }}
            onChange={(e) => validate(e.target.value)}
            maxLength={14}
          />{" "}
          <br />
          {errorMessage === "" ? null : (
            <span
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "red",
              }}
            >
              {errorMessage}
            </span>
          )}
        </pre>
      </div>
    </>
  );
}

export default App;
