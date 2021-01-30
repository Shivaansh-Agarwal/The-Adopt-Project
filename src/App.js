import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// Now you can directly use render() instead of ReactDOM.render()
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
      key: 2,
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
      key: 3,
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
      key: 4,
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));