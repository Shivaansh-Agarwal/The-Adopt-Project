import React from "react";
import ReactDOM from "react-dom";
// import { render } from 'react-dom';
// Now you can directly use render() instead of ReactDOM.render()
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 key="1">Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
