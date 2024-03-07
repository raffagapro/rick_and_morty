import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { addChar } from './redux/accions/accions.js';

function App() {
   const dispatch = useDispatch();

   const [ access, setAccess ] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
      access && navigate('/home');
   }, [access])

   function login(userData) {
      const { username:email, password } = userData;
      // console.log('user info', email, password);
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         setAccess(data.access);
      });
   }

   const onSearch = (id) => {
      // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         (reponse) => {
            if (reponse.data.name) {
               // setCharacters((oldChars) => [...oldChars, reponse.data]);
               dispatch(addChar(reponse.data));
            } else {
               window.alert(`¡No hay personajes con ID: ${id}!`);
            }
         }
      );
   };

   const logout = ()=>{
         setAccess(false);
         // navigate('/home');
   }

   //character = [characterSearched ] //memoria2
   

   return (
      <div className='App'>
         { 
            location.pathname !== '/' ?
            <Nav onSearch={onSearch} logout={logout} /> :
            undefined
         }
         <Routes>

            {/* LOGIN */}
            <Route path='/' element={
               <Form login={login} />
            }/>

            {/* HOME */}
            <Route path='/home' element={
               <Cards />
            } />

            {/* ABOUT */}
            <Route path='/about' element={
               <About />
            }/>

            {/* Detail */}
            <Route path='/detail/:id' element={
               <Detail />
            }/>

            {/* FAVORITES */}
            <Route path='/favorites' element={<Favorites />}/>

         </Routes>
         
      </div>
   );
}

export default App;
