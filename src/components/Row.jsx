import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from "../axios";
import "../Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl,largeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  /* A snippet of code which runs on specific condition: */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      //   console.log(response.data.results);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  const opts = {
    height:"390",
    width: "100%",
    playerVars :{
      //https://developer.google.com/youtube/player_parameters
      autoplay:1,
    }

  }
  const handleClick = (movie) => {
    console.log(movie);
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || '' || movie?.title || movie?.original_name).then((url) => {
        // https://www.youtube.com/watch?v=AkdjfX9TQ
        const urlParams =new URLSearchParams( new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((error) => console.log(error))
    }
  }
  return (
    <>
      <div className="row">
        {/* title */}
        <h2 className="title">{title}</h2>
        <div className="rowPosters">
          {/* Row > posters */}
          {movies.map((movie) => (
            <img
            onClick={() => handleClick(movie) }
              key={movie.id}
              className={`rowPoster ${largeRow && 'firstPoster'}`}
              src={`${baseUrl}${largeRow? movie.poster_path:movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>  
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 
    </>
  );
};

export default Row;
