import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuote } from './../actions/index'

const Quote = (props) => {

 

    const handleGetQuote = () => {
        props.dispatch(getQuote())
    }

    useEffect(() => {
        handleGetQuote()
    },[])

    return (
        <div>
            <h2>
                {props.quote}
            </h2>
            <button onClick={handleGetQuote}>Get New Quote</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote
    }
}

export default connect(mapStateToProps)(Quote)