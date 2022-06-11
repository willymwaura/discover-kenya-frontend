import React, { useState,useEffect} from 'react'
import axios from 'axios'

import Search from './components/search'
import Results from './components/results'
import Popup from './components/popup'
import   "./App.css"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "https://discover-kenya.herokuapp.com/perregion/";
  useEffect(() => {
    sear();
    // eslint-disable-next-line
  }, []);

  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + state.s).then(({ data }) => {
        let results = data

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  const sear = () => {
    
      axios("https://discover-kenya.herokuapp.com/perregion/all").then(({ data }) => {
        let results = data;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
  }

  
  const handleInput = (e) => {
    let s = e.target.value;


    setState(prevState => {
      return { ...prevState, s: s }
    });
  }
   const API="https://discover-kenya.herokuapp.com/site/"
  const openPopup = id => {
    axios(API+id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="app">
      <header>
        <h1>Discover Kenya</h1>
      </header>
      
        <div >
          
           < Search handleInput={handleInput} search={search} />
          
        </div>
        <div>
        <Results results={state.results} openPopup={openPopup} />
        </div>

        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
  
      
      
    </div>
  );
}

export default App