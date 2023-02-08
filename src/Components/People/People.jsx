import React from "react";
import { useContext } from "react";
import { MediaContext } from "../../MediaContext/MediaContext";
import MediaItem from "../MediaItem/MediaItem";

export default function People() {
  const { trendingPerson } = useContext(MediaContext);
  return (
    <>
      <h2 className="border-bottom text-center mt-3">Trending Actors</h2>
      <div className="row m-3">
        {trendingPerson.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
