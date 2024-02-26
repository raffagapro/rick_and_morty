import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import { filterCards, orderCards } from '../../redux/accions/accions';
import { useDispatch } from 'react-redux';
//ESTAS SE VUELVE VARIABLES
const {container, btn} = styles;


export default function Nav({ onSearch, logout }) {
   const dispatch = useDispatch();

   const handleFilter = (e)=>{
      dispatch(filterCards(e.target.value))
   }

   const handleOrder = (e)=>{
      dispatch(orderCards(e.target.value))
   }
   return (
      <div className={container}>
         <Link className={btn} to='/home'>Home</Link>
         <Link className={btn} to='/about'>About</Link>
         <Link className={btn} to='/favorites'>Favorites</Link>
         <a className={btn} onClick={logout}>LogOut</a>
         <SearchBar onSearch={onSearch}/>
         <div>
                <select name="order" onChange={handleOrder} >
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>

                <select name="gender" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="todos">todos</option>
                </select>
         </div>
      </div>
   );
}