import "./botao-favorito.css";
import estrelaMarcada from "../../img/star-filled.png";
import estrelaNaoMarcada from "../../img/star.png";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 * @param { Botao } 
 * @returns Elemento JSX
 */

interface Botao {
  isFavorito: boolean;
  handlerOnClick?: any;
}

const BotaoFavorito = ( { isFavorito, handlerOnClick}:Botao) => {
  const src = isFavorito ? estrelaMarcada : estrelaNaoMarcada;

 

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} onClick={handlerOnClick} />
    </div>
  );
};

export default BotaoFavorito;
