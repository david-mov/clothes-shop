import { GET_SEARCH } from '../../consts/actionConsts'
import axios from 'axios';
import { HOST, PORT } from '../../consts/portConsts'

export function getSearch(name){
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3001/search?name=${name}`)
        dispatch({ type: GET_SEARCH, payload: res.data })
    }
}