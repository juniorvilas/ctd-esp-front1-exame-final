import "./botao-favorito.css";
import estrelaMarcada from "../../img/star-filled.png";
import estrelaNaoMarcada from "../../img/star.png";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */

interface Botao {
  isFavorito: boolean;
  onClick?: any;
}

const BotaoFavorito = ( { isFavorito, onClick}:Botao) => {
  const src = isFavorito ? estrelaMarcada : estrelaNaoMarcada;

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
  );
};

export default BotaoFavorito;
