import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { favoritarPersonagens, fetchPersonagemIDThunk } from '../../store/actions/personagens.action';
import { Personagem } from '../../type';



type Person = {
  personagem: Personagem;
}


/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ personagem }: Person) => {


  const dispatch = useDispatch();

  const handlerFavorito = () => {
    dispatch(favoritarPersonagens(personagem.id));
  }

  const handlerDetalhe = () => {
    fetchPersonagemIDThunk(personagem.id)(dispatch);    
  } 

  return (

    <>
      <div className="card-personagem">
        <Link onClick={handlerDetalhe}  to="/detalhe">
         <img
          src={personagem.image}
          alt={personagem.name}
        />
        </Link>
        
        <div className="card-personagem-body">
          <span>{personagem.name}</span>
          <BotaoFavorito handlerOnClick={handlerFavorito} isFavorito={personagem.favorito} />
        </div>
      </div>
    </>




  );
};

export default CardPersonagem;
