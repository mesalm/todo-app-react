import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </>
  );
}

export default App;
