import React from "react"
import './App.css';
import Nav from "./Components/Nav"
import Card from "./Components/Card"
import Data from "./data"

function App() {
  const data = Data.map(item =>
    <Card
      key={item.id}
      item={item}
    />)

  return (
    <div>
      <Nav />
      {data}
    </div>
  );
}

export default App;
