import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
