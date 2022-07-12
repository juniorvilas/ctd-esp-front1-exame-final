import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Personagem, GlobalState } from '../type'
import Swal from 'sweetalert2'
import { fetchPersonagemThunk } from '../store/actions/personagens.action';
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

  const dispatch = useDispatch();

  useEffect(() => {
    let personagensFiltrados = personagens.filter((personagem: Personagem) => personagem.favorito ?? personagem);
    setFavPersonagens(personagensFiltrados);
  },[personagens]);


  const handlerRemoverTodosFavoritos = ():any => {
        
    Swal.fire({
        title: 'Você tem Certeza?',
        text: "Você não será capaz de reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, remover todos!'
      }).then((result) => {
        if (result.isConfirmed) {        
          Swal.fire(
            'Removidos!',
            'Todos favoritos foram removidos!',
            'success'
          )
          fetchPersonagemThunk()(dispatch);
        }
      })
          
    
  }





  return (
    <div className="container">
      
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        {favPersonagens?.length <= 0 && <span style={{color: 'red'}}>Nenhum favorito por enquanto! :(</span>}
        <button onClick={() => handlerRemoverTodosFavoritos()} className="mb-2 danger">Remover tudo</button>
      </div>
      <GradePersonagens personagens={favPersonagens}/>
    </div>
  );
};

export default PaginaFavoritos;
