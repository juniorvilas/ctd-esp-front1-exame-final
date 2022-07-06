import BotaoFavorito from "../botoes/botao-favorito.componente";
import React, { useEffect, useState } from 'react';
import "./card-personagem.css";
import { useDispatch, useSelector } from 'react-redux';

import { fetchPersonagemStarted, fetchPersonagemThunk } from '../../store/actions/personagens.action';


type GlobalState = {
  person: {
    personagens: {
      id: number;
      name: string;
      image: string;
     
    }[];
    isFetching: boolean;
    errorMessage: string;
  }
}


/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = () => {

  const person = useSelector((state: GlobalState) => state.person);
  const dispatch = useDispatch();  
  
  useEffect(() => {   

    dispatch(fetchPersonagemStarted());
    fetchPersonagemThunk()(dispatch);   
    
  },[dispatch]);

  return (

    <>
    {person.isFetching && <span>Carregando...</span>}
    {person.personagens && person.personagens.map((personagem: any) => (
       <div key={personagem.id} className="card-personagem">
       <img
         src={personagem.image}
         alt={personagem.name}
       />
       <div className="card-personagem-body">
         <span>{personagem.name}</span>
         <BotaoFavorito isFavorito={false} />
       </div>
     </div>
    ))}
   
    </>
    
    
    
    
  );
};

export default CardPersonagem;
