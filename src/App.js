import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./components/card"
import quoteArr from "./quotes.json"

function App() {
  const [quotes, setQuotes] = useState(quoteArr)
  const [value, setValue] = useState("")
  const [key, setKey] = useState(sessionStorage.length.toString())


  const handleChange = (e)=>{
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newQuote = [...quotes, {"quote": value}]
    setQuotes(newQuote)
    setValue("")
  }
  
  return (
    <div className="App">
      <div className="board">
        {
        quotes.map((q, i) => {
          return (
            <Card
              quote={q.quote}
              key={i}
            ></Card>
          )
        })
        }

      </div>
      <form className="fixed-bottom" onSubmit={handleSubmit}>
        <input onChange={handleChange}  className="form-control" type="text" placeholder="Add a quote" value= {value}/>
        <button onClick={handleSubmit} type="button" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
