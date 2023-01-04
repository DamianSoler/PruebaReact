const Buscador = ({ setBuscar }) => {
  return (
    <input
      type="text"
      placeholder="Buscar Personaje ..."
      onChange={(e) => setBuscar(e.target.value)}
    />
  );
};

export default Buscador;
