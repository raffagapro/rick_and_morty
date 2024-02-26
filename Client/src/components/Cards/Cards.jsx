import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';
import { removedChar } from '../../redux/accions/accions';

let {div} = styles;

export default function Cards() {
   const characters =  useSelector((state)=>state.filteredCharacters);
   const dispatch = useDispatch;

   const onClose = (id) => {
      dispatch(removedChar(id));
   };


   return <div className={div}>
      {
         characters.map(({id, name, species, gender, image}) => <Card 
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={()=>onClose(id)}
         />)
      }
   </div>;
}
