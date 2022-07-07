import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Personagem, GlobalState } from '../type'
/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const [favPersonagens, setFavPersonagens] = useState<Personagem[]>();
  const personagens = useSelector((state: GlobalState) => state.person.personagens);



  useEffect(() => {
    let personagensFiltrados = personagens.filter((personagem: Personagem) => personagem.favorito ?? personagem);
    setFavPersonagens(personagensFiltrados);
  },[personagens]);



  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagens personagens={favPersonagens}/>
    </div>
  );
};

export default PaginaFavoritos;
