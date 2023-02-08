import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SimilarItem from "../SimilarItem/SimilarItem";
export default function ItemDetails() {
  let { id, media_type } = useParams();
  let [movieDetails, setMovieDetails] = useState({});
  let [movieGenre, setMovieGenre] = useState([]);
  let [similarMovies, setsimilarMovies] = useState([]);
  async function showItemDetails(media_type, id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=1223fc5463ecf1a7f6dd6094f04dbeee&language=en-US`
    );
    setMovieDetails(data);
    setMovieGenre(data.genres);
  }
  async function getSimilar(id) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/similar?api_key=1223fc5463ecf1a7f6dd6094f04dbeee&language=en-US&page=1`);
    setsimilarMovies(data.results);
  }
  useEffect(() => {
    showItemDetails(media_type, id);
    getSimilar(id);
  }, [id]);

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4">
            {movieDetails.poster_path ? (
              <img
                className="w-100"
                src={
                  "https://image.tmdb.org/t/p/original" +
                  movieDetails.poster_path
                }
                alt=""
              />
            ) : (
              <img
                className="w-100"
                src={
                  "https://image.tmdb.org/t/p/original" +
                  movieDetails.profile_path
                }
                alt=""
              />
            )}
          </div>
          <div className="col-md-8">
            <h1>
              {movieDetails.title}
              {movieDetails.name}
            </h1>
            <h3 className="text-muted">{movieDetails.tagline}</h3>
            {movieGenre?.map((item, index) => (
              <span className="rounded-pill m-2 bg-primary p-1" key={index}>
                {item.name}
              </span>
            ))}
            <div className="vote-average mt-5">
              <p>Vote Avg : {movieDetails.vote_average}</p>
            </div>
            <div className="vote-average mt-5">
              <p>Vote Count : {movieDetails.vote_count}</p>
            </div>
            <div className="vote-average mt-5">
              <p>Popularity : {movieDetails.popularity}</p>
            </div>
            <div className="vote-average mt-5">
              <p>Release Date : {movieDetails.release_date}</p>
            </div>
            <div className="mt-5 text-muted">{movieDetails.overview}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="mb-3">You May Like</h3>
        <div className="row">
          {similarMovies.slice(0, 6).map((similar, index) => (
            <SimilarItem similar={similar} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
