import React, { useState } from "react";
import Button from "../Button";

import "./styles.css";

export default function Card() {
  const [name, setName] = useState("Edit the name");
  const [input, setInput] = useState("");

  function handleEditName() {
    setName(input);
    setInput("");
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Edit name to..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button textButton="Edit name" handleFunction={handleEditName} />
      </div>
    </div>
  );
}
