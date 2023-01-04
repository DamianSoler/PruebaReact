const Lista = ({ results, buscar }) => {
  return (
    <ul>
      {results
        .filter((item) => {
          return item.name.toLowerCase().includes(buscar.toLowerCase());
        })
        .map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
    </ul>
  );
};

export default Lista;
