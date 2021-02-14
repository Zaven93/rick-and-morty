import axios from 'axios'
import {
    GET_LOCATIONS_REQUEST,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_FAIL
} from '../constants/locationsConstants'

export const getLocations = (page) => async (dispatch) => {
    dispatch({ type: GET_LOCATIONS_REQUEST })

    try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/location', {
            params: { page }
        })

        dispatch({ type: GET_LOCATIONS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: GET_LOCATIONS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
