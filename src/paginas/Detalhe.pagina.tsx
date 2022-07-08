import "./Detalhe.css";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useSelector } from "react-redux";


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
  const statePersonagem = useSelector((state: any) => state.person.personagem);   
  console.log(statePersonagem);
  const arrayEpisodios = statePersonagem.personagem.episode.slice(statePersonagem.personagem.episode.indexOf("https://rickandmortyapi.com/api/episode/") + 1);
  console.log(arrayEpisodios);

  return (

    <div className="container">
      <h3>{statePersonagem?.personagem?.name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={statePersonagem?.personagem?.image}
            alt={statePersonagem?.personagem?.name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{statePersonagem?.personagem?.name}</p>
            <p>Planeta: {statePersonagem?.personagem?.origin.name}</p>
            <p>Genero: {statePersonagem?.personagem?.gender}</p>
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
