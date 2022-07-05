import "./card-episodio.css";

/**
 * Card para cada episódio na visualização do personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos episódios
 *
 *
 * @returns Elemento JSX
 */
const CardEpisodio = () => {
  return (
    <div className="card-episodio">
      <h4>Close Rick-counters of the Rick Kind</h4>
      <div>
        <span>S01E01</span>
        <span>Lançado em: April 7, 2014</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
