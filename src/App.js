import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// Now you can directly use render() instead of ReactDOM.render()
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 key="1">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" key="2"/>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" key="3"/>
      <Pet name="Doink" animal="Cat" breed="Mixed" key="4"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));