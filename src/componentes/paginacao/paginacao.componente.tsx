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

    /**
     * Função que se paginacao.next existir ele passar paginacao.next por parametro para a função
     * fetchNextPageThunk que recebe e faz uma nova requisição na API carregando uma nova página
     * @function handleNextPage
     * @returns retorna uma nova pagina
     */
    const handleNextPage = () => {
      if(paginacao.next) {
        fetchNextPageThunk(paginacao.next)(dispatch);
      }     
    };

    /**
      * Função que se paginacao.prev existir ele passar paginacao.prev por parametro para a função
     * fetchNextPageThunk que recebe e faz uma nova requisição na API carregando a página anterior 
     * @function handlePrevPage
     * @returns retorna uma pagina anterior
     */
    const handlePrevPage = () => {
      if(paginacao.prev) {
        fetchNextPageThunk(paginacao.prev)(dispatch);
      }        
    }; 


    /**
     * Função que se paginacao.prev for null então não existe mais paginas anterior dai ele muda o
     * button Anterior para disabled true desabilitando o botão.
     * @function buttonDisabled
     * @returns retorna true ou false a depender do paginacao.prev
     */
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
