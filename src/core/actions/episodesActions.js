import axios from 'axios'
import {
    GET_EPISODES_REQUEST,
    GET_EPISODES_SUCCESS,
    GET_EPISODES_FAIL
} from '../constants/episodesConstants'

export const getEpisodes = (page) => async (dispatch) => {
    dispatch({ type: GET_EPISODES_REQUEST })
    try {
        const episodes = await Promise.all(
            [...Array(4).keys()].slice(1).map((index) => {
                if (index === 1) {
                    return axios.get('https://rickandmortyapi.com/api/episode')
                }
                return axios.get(`https://rickandmortyapi.com/api/episode?page=${index}`)
            })
        )

        const compoundedEpisodes = episodes.map((episode) => episode.data.results).flat()

        dispatch({ type: GET_EPISODES_SUCCESS, payload: compoundedEpisodes })
    } catch (error) {
        dispatch({
            type: GET_EPISODES_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
