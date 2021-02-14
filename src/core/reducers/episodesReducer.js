import {
    GET_EPISODES_REQUEST,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_FAIL
} from '../constants/episodesConstants'

export const episodesReducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_EPISODES_REQUEST:
            return {
                loading: true
            }
        case GET_EPISODES_SUCCESS:
            return {
                loading: false,
                episodes: payload
            }
        case GET_EPISODES_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
