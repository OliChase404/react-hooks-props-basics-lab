import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


import user from "../data/user";


function App() {
  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About user={user} />
    </div>
  );
}

export default App;
