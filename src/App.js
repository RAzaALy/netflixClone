import React from "react";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
    {/* Nav */}
    <Nav />
    {/* Banner */}
    <Banner />
        <Row
          title="NetFlix Originals"
          fetchUrl={requests.fetchNeflixOriginals}
          largeRow
        />
        <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
        <Row title="UpComing Movies" fetchUrl = {requests.fetchUpcoming}  largeRow/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} largeRow/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} largeRow/>
        <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} largeRow/>
      </div>
    </>
  );
}

export default App;
// https://netflixclone-f9ac1.web.app
