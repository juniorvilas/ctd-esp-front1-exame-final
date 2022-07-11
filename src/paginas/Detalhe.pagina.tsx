import "./Detalhe.css";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEpisodesThunk, fetchPersonagemIDThunk } from "../store/actions/personagens.action";


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

  const dispatch = useDispatch();
  const  personagem  = useSelector((state: any) => state.person.personagem.personagem);
  const indexArray = personagem?.id - 1;

  const isFavorito = useSelector((state: any) => state.person.personagens[indexArray].favorito);
  const episodes = useSelector((state: any) => state.person.episodes);
  


   

  


  const arrayEpisodes = (episodios: string[]) => {

    let array = episodios.map(episodio => {
         let index = episodio.indexOf("e/");
         return episodio.slice(index + 2, episodio.length);
    })
  
    return array;
  }
  

  useEffect(() => {
    if(personagem?.episode) {

      let arrayIdEpisodes = arrayEpisodes(personagem.episode);
      
      fetchEpisodesThunk(arrayIdEpisodes)(dispatch);
    }
  },[personagem.episode, dispatch])


 

  return (
    
    <div className="container">      
      <h3>{personagem?.name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={personagem?.image}
            alt={personagem?.name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{personagem?.name}</p>
            <p>Planeta: {personagem?.origin.name}</p>
            <p>Genero: {personagem?.gender}</p>
          </div>
          <BotaoFavorito isFavorito={isFavorito} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
      {episodes?.length ? 
          episodes.map((episodio) => {
            return <CardEpisodio episodio={episodio} key={episodio.id} />
          })

          :
          <span style={{color: 'red'}}>Que pena :( não apareceu em nenhum episodio!</span>
        }
        
      </div>
    </div>
  );
};

export default PaginaDetalhe;
