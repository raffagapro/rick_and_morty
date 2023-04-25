import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, hndleOnClose}) {

   return <div className={styles}>
      {
         characters.map(({id, name, species, gender, image}) => 
         <Card 
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={()=> hndleOnClose(id)}
         />)
      }
   </div>;
}

