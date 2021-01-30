const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, name),
    React.createElement("h2", { key: 2 }, animal),
    React.createElement("h2", { key: 3 }, breed),
  ]);
};

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
