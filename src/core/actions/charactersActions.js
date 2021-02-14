import axios from 'axios'
import {
    GET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAIL
} from '../constants/charactersConstants'

export const getCharacters = (page) => async (dispatch) => {
    dispatch({ type: GET_CHARACTERS_REQUEST })

    try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character', {
            params: { page }
        })

        dispatch({ type: GET_CHARACTERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: GET_CHARACTERS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
