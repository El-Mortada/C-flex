import React, { useContext } from "react";
import { MediaContext } from "../../MediaContext/MediaContext";
import MediaItem from "../MediaItem/MediaItem";

export default function Tv() {
  const { trendingTv } = useContext(MediaContext);
  return (
    <>
      <h2 className="border-bottom text-center mt-3">Trending Tv</h2>
      <div className="row m-3">
        {trendingTv.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
