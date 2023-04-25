import React from "react";
import styles from './Cards.module.css';

const { div, btn, nameStyle, imageStyle, data } = styles;
// export default function Card(props) {
//    //logica


//    return (
//       <div>
//          {/* <button onClick={}>X</button>
//          <h2></h2>
//          <h2></h2>
//          <h2></h2>
//          <img  src={} alt="" /> */}
//       </div>
//    );
// }

let Card = ({name, species, gender, image, onClose}) =>{
   return(
      <div className={div}>
         <button className={btn} onClick={onClose}>X</button>
         <h2 className={nameStyle}>{name}</h2>
         <h2 className={data}>{species}</h2>
         <h2 className={data}>{gender}</h2>
         <img className={imageStyle} src={image} alt="" />
      </div>
   );
}

export default Card;