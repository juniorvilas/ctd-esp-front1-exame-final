import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { GlobalState } from '../type';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemStarted, fetchPersonagemThunk } from '../store/actions/personagens.action';
import { useEffect } from 'react';
/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {

  const { personagens } = useSelector((state: GlobalState) => state.person);
  

  const dispatch = useDispatch();  

  useEffect(() => {
    if(personagens.length === 0) {
      dispatch(fetchPersonagemStarted());
      fetchPersonagemThunk()(dispatch);
    }
     })

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>        
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens personagens={personagens}/>
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
