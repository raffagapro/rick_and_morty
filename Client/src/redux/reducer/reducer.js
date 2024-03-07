import { 
    ADD_CHARACTER, 
    ADD_FAVORITE, 
    FILTER, 
    ORDER, 
    REMOVED_CHARACTER, 
    REMOVED_FAVORITE
} from "../accions/accions";

const initialState = {
    myFavorites:[],
    allCharacters:[],
    filteredCharacters:[]
}

const rootReducer= (state = initialState, action)=>{
    const { type, payload } = action;

    switch (type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: payload,
            }

        case ADD_CHARACTER:
            return{
                ...state,
                allCharacters: [...state.allCharacters, payload],
                filteredCharacters: [...state.allCharacters, payload],
            }

        case REMOVED_CHARACTER:
            return{
                ...state,
                allCharacters: state.allCharacters.filter((char)=>char.id !== payload)
            }
        
        case REMOVED_FAVORITE:
            return{
                ...state,
                myFavorites: payload
            }

        case FILTER:
        return{
            ...state,
            filteredCharacters: payload !== 'todos' ? state.allCharacters.filter((char)=>char.gender === payload) : state.allCharacters 
        }

        case ORDER:
            const sortedChars = state.filteredCharacters.slice().sort((a, b)=>{
                //se ordena de la Asc
                if (payload === "A") {
                    return a.id - b.id
                }else{
                    return b.id - a.id
                }
            })
        return{
            ...state,
            filteredCharacters: sortedChars
            
        }
    
        default:
            return{...state};
    }
}

export default rootReducer;