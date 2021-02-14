import {
    GET_LOCATIONS_REQUEST,
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_FAIL
} from '../constants/locationsConstants'

export const locationsReducer = (state = {}, action) => {
    const { payload, type } = action

    switch (type) {
        case GET_LOCATIONS_REQUEST:
            return {
                loading: true
            }
        case GET_LOCATIONS_SUCCESS:
            return {
                loading: false,
                locations: payload
            }
        case GET_LOCATIONS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
