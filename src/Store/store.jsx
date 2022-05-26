import { createStore } from "redux";
import { ADD, SETTOFAVORITE } from "./consts";


const initialState = {
    list: [
        {
            text: "prova",
            favorite: false,
        },
        {
            text: "prova2",
            favorite: true,
        },{
            text: "prova3",
            favorite: false,
        },{
            text: "prova4",
            favorite: true,
        },
    ]
    
}

const listReducer = (state , action) => {
    switch (action.type) {
        case ADD:
          return  { 
              ...state,
              list: [...state.list, action.payload]
            }
        
        default : 
        return state
    } 
}

export const store = createStore(listReducer, initialState);