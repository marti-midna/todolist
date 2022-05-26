import { ADD, SETTOFAVORITE } from "./consts"
export const addNote = (payload) => ({
    type: ADD,
    payload: payload
})