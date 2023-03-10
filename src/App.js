import React from "react";
import './App.css';
import Row from "./Row.jsx";
import requests from "./request.js";
import Banner from './Banner.jsx'
import Navbar from "./Nav.jsx"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow />

      <Row title="Trending Now" 
      fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" 
      fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies"
       fetchUrl={requests.fetchActionMovies}/>

      <Row title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>

      <Row title="Horror Movies"
       fetchUrl={requests.fetchHorrorMovies}/>

      <Row title="Romance movies" 
      fetchUrl={requests.fetchRomanceMovies}/>

      <Row title="Documentaries" 
      fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
