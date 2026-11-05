import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowName(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <inputn type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>

      </form>

      <h2>Student Name: {showName}</h2>
    </>
  );
};

export default App;