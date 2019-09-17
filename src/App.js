import React from "react";
import "./App.css";
import CategoryList from "./container/CategoryList";
import Menu from "./components/Menu";
function App() {
  return (
    <React.Fragment>
      <Menu></Menu>
      <CategoryList></CategoryList>
    </React.Fragment>
  );
}

export default App;
