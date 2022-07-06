import "./filtros.css";
import React, { useState , useRef} from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { fetchPersonagemThunk, filterPersonagemThunk } from "../../store/actions/personagens.action";

const Filtros = () => {
  const dispatch = useDispatch();
  const [texto, setTexto] = useState('');
  const input = useRef(null);


  const handlerClick = (e: any) => {
    if (!texto) {
      fetchPersonagemThunk()(dispatch);  
    } else {      
      filterPersonagemThunk(texto)(dispatch);      
    }
  }

  const hanclerClear = () => {
    setTexto('');
    fetchPersonagemThunk()(dispatch);  
  }
  
  const handlerOnChange = (e: any) =>  {
    setTexto(e.target.value);
  }

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        ref={input}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={handlerOnChange}
        value={texto}        
      />
      <Button onClick={handlerClick} variant="primary">Pesquisar</Button>
      <Button onClick={hanclerClear} variant="secondary">Limpar</Button>
     
      
    </div>
  );
};

export default Filtros;
