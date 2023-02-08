import React, { useContext } from "react";
import { MediaContext } from "../../MediaContext/MediaContext";
import MediaItem from "../MediaItem/MediaItem";

export default function Movies() {
  const { trendingMovies } = useContext(MediaContext);
  return (
    <>
      <h2 className="border-bottom text-center mt-3">Trending Movies</h2>
      <div className="row m-3">
        {trendingMovies.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
