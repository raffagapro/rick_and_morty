import axios from 'axios';
import styles from './Detail.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//ESTAS SE VUELVE VARIABLES
const {div, nameStyle, imageStyle, btn, data } = styles;


export default function Detail() {
    //crear estado local
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    //toma la informacion apartir del ID del API
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
            // console.log(data);
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);


   return (
      <div className={div}>
         {/* <button className={btn} onClick={()=>(onClose(id))}>X</button> */}
         <h2 className={nameStyle}>{character.name}</h2>
         <h2 className={data}>{character.status}</h2>
         <h2 className={data}>{character.species}</h2>
         <h2 className={data}>{character.gender}</h2>
         <h2 className={data}>{character.origin?.name}</h2>
         <img className={imageStyle} src={character.image} alt='' />
      </div>
   );
}
