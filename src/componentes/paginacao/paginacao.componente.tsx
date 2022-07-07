import "./paginacao.css";
import { fetchNextPageThunk } from '../../store/actions/personagens.action'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */


const Paginacao = () => {
    const [page, setPage] = useState(2);
    const dispatch = useDispatch();

    const handleNextPage = () => {
      setPage((prevPagina) => Math.min(prevPagina + 1, 826));     
      fetchNextPageThunk(page)(dispatch);
      console.log(page)
    };

    const handlePrevPage = () => {
      setPage((prevPagina) => Math.max(prevPagina - 1, 1));     
      fetchNextPageThunk(page)(dispatch);
      console.log(page)
    };


  return (
    <div className="paginacao">
      <button disabled={false} onClick={handlePrevPage} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} onClick={handleNextPage} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
