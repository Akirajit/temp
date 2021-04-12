import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer
        greeting="Welcome from BRANCH4! This
          site is currently under contruction."
      />
    </div>
  );
}

export default App;
