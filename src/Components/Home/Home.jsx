import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MediaContext } from "../../MediaContext/MediaContext";
import MediaItem from "../MediaItem/MediaItem";

export default function Home() {
  let { trendingMovies, trendingTv, trendingPerson } = useContext(MediaContext);

  return (
    <>
      <div className="row mt-3">
        <div className="col-md-4 my-3 d-flex align-items-center">
          <div className="description">
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4 text-white">
              Watch Latest Trending <br /> Movies Online
            </h2>
            <p className="h6 text-muted">Exclusive Trending Movies</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>

        {trendingMovies.slice(0, 16).map((item, index) => (
          <MediaItem item={item} key={index} />
        ))}
      </div>
      <div className="row mt-3">
        <div className="col-md-4 my-3 d-flex align-items-center">
          <div className="description">
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4 text-white">
              Watch Latest Trending <br /> Tv Shows Online
            </h2>
            <p className="h6 text-muted">Exclusive Trending Tv Shows</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>

        {trendingTv.slice(0, 16).map((item, index) => (
          <MediaItem item={item} key={index} />
        ))}
      </div>
      <div className="row mt-3">
        <div className="col-md-4 my-3 d-flex align-items-center">
          <div className="description">
            <div className="brdr w-25 mb-3"></div>
            <h2 className="h4 text-white">
              Watch Latest Trending <br /> Tv Shows Online
            </h2>
            <p className="h6 text-muted">Exclusive Trending Tv Shows</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>

        {trendingPerson
          .filter((item) => item.profile_path !== null)
          .map((item, index) => (
            <MediaItem item={item} key={index} />
          ))}
      </div>
    </>
  );
}
