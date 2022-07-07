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
      <div className="mt-2 d-grid gap-2">
      <Button size="lg" onClick={handlerClick} variant="primary">Pesquisar</Button>
      <Button size="lg" onClick={hanclerClear} variant="secondary">Limpar</Button>
      </div>
      
     
      
    </div>
  );
};

export default Filtros;
