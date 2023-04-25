import { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import characters, { Rick } from './data.js';

function App () {
  //aqui va mi cerebroooooo

  const [ characters, setCharacters ] = useState([]); //memoria 1

  const onSearch = (char) =>{
    // characters.push(char); //memoria 1 INCORRECTO!!!
    //llamar a la api y buscar un personaje con el nombre que mandamos
    fetch(`https://rickandmortyapi.com/api/character/${char}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]); //MANERA CORRECTA DE PASAR ESTADOS
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const hndleOnClose = (id) => {
    setCharacters((oldChars)=> oldChars.filter((ch)=>ch.id !== +id));
  };

  let myStyle = { padding: '25px' };
  return (
    <div className='App' style={myStyle}>
      <div>
        <Nav onSearch={onSearch} ></Nav>
      </div>
      <hr />
      <div>
        <Cards
          hndleOnClose={hndleOnClose}
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
