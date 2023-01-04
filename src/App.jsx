import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [results, setResults] = useState([]);
  const [nombre, setNombre] = useState("");
  const [buscar, setBuscar] = useState("");

  const getData = async () => {
    const response = await fetch("api.json");
    const data = await response.json();
    setResults(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([
      ...results,
      {
        name: nombre,
      },
    ]);
  };

  return (
    <div className="layout">
      <h1 className="titulo">Personajes de Starwars</h1>

      <Buscador setBuscar={setBuscar} />

      <Lista results={results} buscar={buscar} />

      <h3 className="subtitulo">falta un personaje?</h3>

      <Formulario
        results={results}
        setResults={setResults}
        nombre={nombre}
        setNombre={setNombre}
      />
    </div>
  );
}

export default App;
