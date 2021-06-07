import React, { useState, useEffect } from "react";

export default function UserInput({ onResponse }) {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(null);
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(input);
    setInput("");
    setError(null);
  };

  useEffect(() => {
    if (submit === null) {
      return;
    }

    fetch(`https://api.github.com/users/${submit}`)
      .then((response) => response.json())
      .then((json) => onResponse(json))
      .catch((error) => setError(error));
  }, [submit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">GitHub username: </label>
        <input
          name="username"
          type="text"
          required
          value={input.userName}
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
      <div className="error">{error && <span>{error.message}</span>}</div>
    </div>
  );
}
