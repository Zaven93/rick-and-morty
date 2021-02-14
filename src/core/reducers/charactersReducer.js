import {
    GET_CHARACTERS_REQUEST,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAIL
} from '../constants/charactersConstants'

export const charactersReducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_CHARACTERS_REQUEST:
            return {
                loading: true
            }
        case GET_CHARACTERS_SUCCESS:
            return {
                loading: false,
                characters: payload
            }
        case GET_CHARACTERS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
