export const ADD_FAVORITE = 'ADD_FAV';
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVED_CHARACTER = 'REMOVED_CHARACTER';
export const REMOVED_FAVORITE = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export function addChar(char){
    return{
        type: ADD_CHARACTER,
        payload:char
    }
}
export function removedChar(id){
    return{
        type: REMOVED_CHARACTER,
        payload:id
    }
}

export function addFav(char){
    return{
        type: ADD_FAVORITE,
        payload:char
    }
}

export function removeFav(id){
    return{
        type: REMOVED_FAVORITE,
        payload:id
    }
}

export function filterCards(gender){
    return{
        type:FILTER,
        payload:gender
    }
}

export function orderCards(order){
    return{
        type:ORDER,
        payload:order
    }
}