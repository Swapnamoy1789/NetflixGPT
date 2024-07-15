import { useDispatch, useSelector } from "react-redux";
import { addNowPlayMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
    //Fetch data from TMDB Api and update store
  const dispatch= useDispatch();
  const nowPlayingMovies= useSelector(store=>store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export  default useNowPlayingMovies;