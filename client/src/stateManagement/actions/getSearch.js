import { GET_SEARCH } from '../../consts/actionConsts'
import axios from 'axios';

export function getSearch(name){
    return async (dispatch) => {
        const res = await axios.get(`/search?query=${name}`)
        dispatch({ type: GET_SEARCH, payload: res.data })
    }
}