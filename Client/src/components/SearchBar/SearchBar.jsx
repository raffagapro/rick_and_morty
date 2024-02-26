import { useState } from 'react';
import styles from './SearchBar.module.css';
let {div, input, btn} = styles;

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleInputChange = (e) => {
      setId(e.target.value);
   }

   return (
      <div className={div}>
         <input  className={input} type='search' value={id} onChange={handleInputChange} />
         <button className={btn} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
