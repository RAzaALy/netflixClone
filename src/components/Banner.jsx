import React, { useState, useEffect } from "react";
import "../Banner.css";
import axios from "../axios";
import requests from "../requests";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  const randomProperty = function (requests) {
  let  keys = Object.keys(requests);
    // console.log(requests[keys[ keys.length * Math.random() << 0]]);
    return requests[keys[ keys.length * Math.random() << 0]];
};
useEffect(() => {
  const fetchData = async () => {
      // randomProperty(requests);
      const response = await axios.get(randomProperty(requests));
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      //   console.log(
      //     response.data.results[
      //       Math.floor(Math.random() * response.data.results.length - 1)
      //     ]
      //   );
      return response;
    };
    fetchData();
  }, []);
  function turncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "100% 100%",
          backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="bannerContent">
          {/* title */}
          <h1 className="bannerTitle">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          {/* Buttons */}
          <div className="bannerBtns">
            <button className="bannerBtn">Play</button>
            <button className="bannerBtn">My List</button>
          </div>
          {/* Description */}
          <h1 className="bannerDesc">
          {turncate(movie?.overview,150)}</h1>
        </div>
        <div className="bannerFadeBotm"></div>
      </header>
    </>
  );
};

export default Banner;