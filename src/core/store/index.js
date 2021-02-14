import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { charactersReducer } from '../reducers/charactersReducer'
import { episodesReducer } from '../reducers/episodesReducer'
import { locationsReducer } from '../reducers/locationsReducer'

const reducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
