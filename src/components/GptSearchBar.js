import React, { useRef, useState, useEffect } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';

const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const searchMovieTMDB = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      setMovies(json.results);
      console.log(json.results);
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
    }
  };

  const handleGptSearchClick = () => {
    const query = searchText.current.value;
    if (query) {
      searchMovieTMDB(query);
    }
  };

  useEffect(() => {
    const fetchTrailer = async () => {
      if (selectedMovie) {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailer(trailer);
      }
    };

    fetchTrailer();
  }, [selectedMovie]);

  return (
    <div className='pt-[35%] md:pt-[10%] flex flex-col items-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className='p-4 m-4 col-span-8' placeholder={lang[langkey].gptSearchPlaceholder} />
        <button className='col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>
          {lang[langkey].search}
        </button>
      </form>
      {movies && movies.length > 0 && (
        <div className='p-4 m-4 bg-black bg-opacity-60 rounded-lg overflow-x-auto flex max-w-full'>
          {movies.filter(movie => movie.poster_path).map(movie => (
            <div key={movie.id} onClick={() => setSelectedMovie(movie)} className="cursor-pointer flex-shrink-0 w-32 mx-2">
              <img src={`${IMG_CDN_URL}${movie.poster_path}`} alt={movie.title} className='w-32 h-48 object-cover' />
              <h3 className='text-white font-bold text-sm mt-2'>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
      {selectedMovie && (
        <div className='p-4 m-4 bg-black bg-opacity-80 rounded-lg w-full max-w-xl overflow-auto'>
          <h3 className='text-white font-bold text-xl'>{selectedMovie.title}</h3>
          <p className='text-white'>{selectedMovie.overview}</p>
          {trailer && (
            <div className='mt-4'>
              <iframe
                width="100%"
                height="1000"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
