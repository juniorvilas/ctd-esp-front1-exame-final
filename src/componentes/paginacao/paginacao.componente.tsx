import "./paginacao.css";
import { fetchNextPageThunk } from '../../store/actions/personagens.action'
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../type'

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */


const Paginacao = () => {
    const { paginacao }  = useSelector((state: GlobalState) => state.person);
     
    const dispatch = useDispatch();

   const handleNextPage = () => {
      if(paginacao.next) {
        fetchNextPageThunk(paginacao.next)(dispatch);
      }     
    };

    const handlePrevPage = () => {
      if(paginacao.prev) {
        fetchNextPageThunk(paginacao.prev)(dispatch);
      }        
    }; 

    const buttonDisabled = () => {
      if(paginacao.prev === null) return true;
      return false;
    }


  return (
    <div className="paginacao">
      <button disabled={buttonDisabled()} onClick={handlePrevPage} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} onClick={handleNextPage} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
