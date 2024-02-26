import styles from './About.module.css';
//ESTAS SE VUELVE VARIABLES
const {div} = styles;

export default function About() {
    return (
       <div className={div}>
          <h1>ESTO ES EL ABOUT!!!</h1>
       </div>
    );
 }