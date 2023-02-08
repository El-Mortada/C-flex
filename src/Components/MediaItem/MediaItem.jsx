import React from "react";
import { Link } from "react-router-dom";

export default function MediaItem({ item }) {
  return (
    <>
      <div className="col-md-2 p-3 ">
        <Link to={`/itemdetails/${item.id}/${item.media_type}`}>
          <div className="movies position-relative">
            {item.poster_path ? (
              <img
                className="w-100 cursor-pointer"
                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                alt=""
              />
            ) : (
              <img
                className="w-100 cursor-pointer"
                src={"https://image.tmdb.org/t/p/w500" + item.profile_path}
                alt=""
              />
            )}

            <h4 className="h6 text-center mt-2">
              {item.title}
              {item.name}
            </h4>
            {item.vote_average ? (
              <div className="vote p-2 position-absolute top-0 end-0">
                {item.vote_average.toFixed(1)}
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
