import {types} from './types';
import axios from 'axios';

export const fetchPost = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => {
        dispatch({
            type : types.GET_POSTS,
            payload : response.data,
        })
        // console.log(response.data)
    })
    .catch(error => {
        // console.log(error)
    })
}
