import { useState } from "react";
import "./App.css";

function App() {
  // declarando state com valor inicial
  const [message, setMessage] = useState("Olá pessoal");

  return (
    <>
      <div>
        <h1>{message}</h1>
        <button
          onClick={() => {
            setMessage(message === "Olá pessoal" ? "mudou" : "Olá pessoal");
          }}
        >
          click aqui para mudar o stado da mensagem
        </button>
      </div>
    </>
  );
}

export default App;
