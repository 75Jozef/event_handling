import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameEntered, setNameEntered] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function posli() {
    setNameEntered(name);
  }

  return (
    <div className="container">
      <h1>Ahoj {nameEntered}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={posli}>Submit</button>
    </div>
  );
}

export default App;
