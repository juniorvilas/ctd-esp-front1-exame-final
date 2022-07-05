import "./filtros.css";

const Filtros = () => {
  return (
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
      />
    </div>
  );
};

export default Filtros;
