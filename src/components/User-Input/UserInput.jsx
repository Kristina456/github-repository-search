import React, { useState, useEffect } from "react";
import "./UserInput.css";

export default function UserInput({ onSubmit }) {
  const [input, setInput] = useState({ value: "" });

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
    setInput({ value: "" });
  };

  return (
    <div className="c-user-input">
      <form className="c-user-input__form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          className="c-user-input_form__input"
          placeholder="Search or jump to..."
          name="username"
          type="text"
          required
          value={input.value}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
