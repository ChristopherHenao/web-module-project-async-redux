import axios from 'axios'

export const GET_QUOTE_START = "GET_QUOTE_START"
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS"
export const GET_QUOTE_FAILURE = "GET_QUOTE_FAILURE"

export const getQuote = () => (dispatch) => {

    dispatch({type: GET_QUOTE_START})
    axios.get('https://api.kanye.rest/')

    .then(res => {
        dispatch({type: GET_QUOTE_SUCCESS, payload: (res.data.quote)})
        console.log(res.data.quote)
    })

    .catch(err => {
        dispatch({type: GET_QUOTE_FAILURE, payload: (`Error: ${err}`)})
    })
}
