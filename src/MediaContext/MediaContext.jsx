import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export let MediaContext = createContext(null);

function MediaContextProvider(props) {
  const [trendingMovies, settrendingMovies] = useState([]);
  const [trendingTv, settrendingTv] = useState([]);
  const [trendingPerson, settrendingPerson] = useState([]);
  
  async function getTrending(mediaType, callBack) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=1223fc5463ecf1a7f6dd6094f04dbeee`);
    callBack(data.results);
  }
  useEffect(() => {
    getTrending("movie", settrendingMovies);
    getTrending("tv", settrendingTv);
    getTrending("person", settrendingPerson);
  }, []);
  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingTv, trendingPerson }}
    >
      {props.children}
    </MediaContext.Provider>
  );
}

export default MediaContextProvider;
