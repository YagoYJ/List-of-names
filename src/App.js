import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import "./global.css";

export default function App() {
  const [nameCard, setNameCard] = useState([{ name: "" }]);

  function handleAddName() {
    setNameCard([
      ...nameCard,
      {
        name: "",
      },
    ]);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Button textButton="Add name" handleFunction={handleAddName} />
          <div className="cards">
            {nameCard.map((card, index) => {
              return <Card key={index} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
