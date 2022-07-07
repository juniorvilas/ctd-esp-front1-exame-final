import "./Detalhe.css";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../type';



/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */
const PaginaDetalhe = () => {


  return (
    <div className="container">
      <h3>Rick Sanchez</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div className={"detalhe-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>
          <BotaoFavorito isFavorito={false} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        <CardEpisodio />
        <CardEpisodio />
        <CardEpisodio />
      </div>
    </div>
  );
};

export default PaginaDetalhe;
