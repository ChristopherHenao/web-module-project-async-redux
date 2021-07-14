import { GET_QUOTE_START, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE } from './../actions/index'


const initialState = {
    quote: '',
    fetching: false,
    error: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_QUOTE_START:
            return {
                ...state,
                fetching: true
            }
        case GET_QUOTE_SUCCESS:
            return {
                ...state,
                fetching: false,
                quote: action.payload
            }
        case GET_QUOTE_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default rootReducer