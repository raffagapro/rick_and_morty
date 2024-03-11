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

   async function login(userData) {
      try {
         const { username:email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         let response = await axios(URL + `?email=${email}&password=${password}`);
         let { access } = response.data;
         setAccess(access);  
      } catch (error) {
         console.log(error);
      }
   }

   const onSearch = async (id) => {
      try {
         let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (response.data.name) {
            dispatch(addChar(response.data));
         } else {
            window.alert(`¡No hay personajes con ID: ${id}!`);
         }
      } catch (error) {
         console.log(error.message);
      }
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
