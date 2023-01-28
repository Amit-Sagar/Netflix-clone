import React, { useState, useEffect } from "react";
import axios from "axios";
import request from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(request.requestPopular)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  const truncateStr = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className=" w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-tr from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] py-4 md:p-8">
          <h1 className="text-2xl font-bold md:text-4xl ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-200 px-5 py-1 ">
              Play
            </button>
            <button className="border text-white border-gray-200 px-5 py-1 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released:{movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncateStr(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
