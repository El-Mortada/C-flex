import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SimilarItem({ similar }) {
  let navigate = useNavigate();
  function navigateDetail(id) {
    navigate(`/itemdetails/${similar.id}/movie`);
  }
  return (
    <>
      <div className="poster col-md-2 cursor-pointer" onClick={navigateDetail}>
        <img
          className="w-100 mb-2"
          src={"https://image.tmdb.org/t/p/w500" + similar.poster_path}
          alt=""
        />
        <p className="text-center">{similar.title}</p>
      </div>
    </>
  );
}
