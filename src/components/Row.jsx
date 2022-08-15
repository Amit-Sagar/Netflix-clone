import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchBaseUrl, rowId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(fetchBaseUrl)
      .then((res) => setData(res.data.results))
      .catch((error) => console.log(error));
  }, [fetchBaseUrl]);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h1 className="text-white text-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {data?.map((item, id) => (
            <Movie item={item} id={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
