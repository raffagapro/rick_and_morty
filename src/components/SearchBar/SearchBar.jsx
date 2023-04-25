import React, { useState } from "react";
import styles from './/SearchBar.module.css';

const { div, input, btn } = styles;

//MOCKDATA se deberia hacer llamado a una API o BASE DE DATOS
const example = {
   name: 'Morty Smith',
   species: 'Human',
   gender: 'Male',
   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};


export default function SearchBar({onSearch}) {

   const [character, setCharacter ] = useState();

   const handleInputChange = (e) =>{
      setCharacter(e.target.value);
   }

   return (
      <div className={div}>
         <input className={input} type='search' value={character} onChange={handleInputChange} />
         <button className={btn} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
