import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonagemThunk } from '../store/actions/personagens.action';
import { useEffect } from 'react';
import './Inicio.css';

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {

  const { personagens, isFetching, errorMessage } = useSelector((state: any) => state.person);
  

  const dispatch = useDispatch();  

  useEffect(() => {
    fetchPersonagemThunk()(dispatch);        
    
  },[dispatch]);

  return (
      
      <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>        
      </div>
      <Filtros />
      <Paginacao />
      {isFetching && <span>Carregando...</span>}
      {errorMessage && <span>Ocorreu um erro: {errorMessage}</span>}
      <GradePersonagens personagens={personagens}/>
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
