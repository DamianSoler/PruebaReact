const Formulario = ({ results, setResults, nombre, setNombre }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre });
    setResults([
      ...results,
      {
        name: nombre,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del personaje"
        name="nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
