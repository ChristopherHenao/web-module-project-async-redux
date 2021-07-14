import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Quote from './components/Quote'
import './App.css'

function App() {

  const [quote, setQuote] = useState('')

  useEffect(() => {
      axios.get('https://api.kanye.rest/')
    .then(res => {
      setQuote(res.data.quote)
    })
  },[])


  return (
    <div className="App">
      <h1>Quotes of the Century: </h1>
      <Quote/>
    
    </div>
  );
}

export default App;
