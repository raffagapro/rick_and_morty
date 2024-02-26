import { applyMiddleware, createStore, compose } from "redux";
import reducer from './reducer/reducer';
import { thunk } from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

//pasar reducer config file como argumento
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;