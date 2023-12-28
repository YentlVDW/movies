import React, { useEffect, useState } from "react";
import downArrow from "../assets/down-arrow.png";
import plus from "../assets/plus.png";
import clock from "../assets/clock.png";

import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("All genres");

  const filteredMovies = movies.filter((movie) => {
    if (query === "All genres") {
      return movies;
    } else {
      return movie.genre1.toLowerCase().includes(query.toLowerCase());
    }
  });
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:2000/movies");
        setMovies(res.data);
      } catch (err) {}
    };
    fetchMovies();
  }, []);
  const genres = [
    "All genres",
    "Adventure",
    "Action",
    "Animation",
    "Drama",
    "Horror",
    "Comedy",
    "Documentary",
  ];
  const [open, setOpen] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  function arrowfunctionality() {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  function listfunc(value, index) {
    setQuery(value);
    setListIndex(index);
  }
  return (
    <div className="movies-container">
      <div className="header">
        <div className="title-container">
          <div className="asf" onClick={arrowfunctionality}>
            <h1>Genres</h1>
            <img
              src={downArrow}
              alt="arrow"
              className={open === true ? "arrow active" : "arrow"}
            />
          </div>
        </div>

        <div>
          <ul className={open === true ? "dropdown open" : "dropdown"}>
            {genres.map((genre, index) => (
              <li
                key={index}
                value={query}
                onClick={(e) => listfunc(e.target.innerHTML, index)}
                className={listIndex === index ? "active" : ""}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="cards">
          {filteredMovies.map((movie) => (
            <div className="card" key={movie._id}>
              <img src={`./images/` + movie.img} alt="movie" />
              <div className="text-overlay">
                <div className="text">
                  <h2>{movie.title}</h2>
                  <p>{movie.genre1}</p>
                  <div className="duration">
                    <img src={clock} alt="clock" />
                    <p>{movie.duration} min</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
