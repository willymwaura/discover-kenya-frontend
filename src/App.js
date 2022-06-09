import React, { useState, useEffect } from "react";
import axios from 'axios'


import Siteinfo from "./siteinfo";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://discover-kenya.herokuapp.com/perregion/";
const url="https://discover-kenya.herokuapp.com/site/"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sites, setSites] = useState([]);

  useEffect(() => {
    searchSites("all");
  }, []);

  const searchSites = async (title) => {
    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    console.log(data)

    setSites(data);
  };
  
  const openPopup = id => {
    axios(url +  id).then(({ data }) => {
      let result = data;

      console.log(result);

      setSites(result)
    });
  }

  

  return (
      

    <div className="app">
      <h1>Discover KENYA</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter the province you want to visit"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchSites(searchTerm)}
        />
      </div>
      
      

      {sites?.length > 0 ? (
        <div className="container">
          {sites.map((site) => ( 
            <MovieCard site={site} key={site.id} openPopup={openPopup}/>
            
          ))}
        {(typeof state.site.title != "undefined") ? <Siteinfo selected={state.site} /> : false}
        
        </div>
        
    
      ) : (
        <div className="empty">
          <h2>No site  found</h2>
        </div>
      )}
      </div>
   
  )
};

export default App;
    

   
  
