import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/accions/accions';
//ESTAS SE VUELVE VARIABLES
const {div, nameStyle, imageStyle, btn, data } = styles;


export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();
   const myFavorites =  useSelector((state)=>state.myFavorites);

   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image,
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id)) //mandar id de personaje como argumento
      }else{
         setIsFav(true);
          dispatch(addFav(myChar)) //mandar personaje como arg
      }
   }

   return (
      <div className={div}>
         <button className={btn} onClick={()=>(onClose(id))}>X</button>
         {/* BTN DE FAV */}
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
            <h2 className={nameStyle}>{name}</h2>
         </Link>
         <h2 className={data}>{status}</h2>
         <h2 className={data}>{species}</h2>
         <h2 className={data}>{gender}</h2>
         <h2 className={data}>{origin}</h2>
         <img className={imageStyle} src={image} alt='' />
      </div>
   );
}
